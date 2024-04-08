/*
 * Teleport
 * Copyright (C) 2023  Gravitational, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package client

import (
	"context"
	"os"
	"regexp"
	"encoding/json"

	"github.com/gravitational/trace"

	apievents "github.com/gravitational/teleport/api/types/events"
	"github.com/gravitational/teleport/lib/events"
	"github.com/gravitational/teleport/lib/session"
)

// playFromFileStreamer implements [player.Streamer] for
// streaming from a local file.
type playFromFileStreamer struct {
	filename string
}

func (p *playFromFileStreamer) StreamSessionEvents(
	ctx context.Context,
	sessionID session.ID,
	startIndex int64,
) (chan apievents.AuditEvent, chan error) {
	evts := make(chan apievents.AuditEvent)
	errs := make(chan error, 1)

	go func() {
		f, err := os.Open(p.filename)
		if err != nil {
			errs <- trace.ConvertSystemError(err)
			return
		}
		defer f.Close()

		pr := events.NewProtoReader(f)
		for i := int64(0); ; i++ {
			evt, err := pr.Read(ctx)
			if err != nil {
				errs <- trace.Wrap(err)
				return
			}

			if i >= startIndex {
				evts <- evt
			}
		}
	}()
	return evts, errs
}

type extendedRecord struct {
	Event string `json:"event"`
	Session []string `json:"session"`
	SessionCleaned []string `json:"session_clean"`
}

func (p *sessionPlayer) playRangeExtended(from, to int) {
	if to == 0 {
		to = len(p.sessionEvents)
	}
	var i int
	var builder strings.Builder
	offset, bytes := 0, 0
	for i = 0; i < to; i++ {
		
		e := p.sessionEvents[i]
		eventType := e.GetString(events.EventType)

		switch eventType {
		// 'print' event (output)
		case events.SessionPrintEvent:
			offset = e.GetInt("offset")
			bytes = e.GetInt("bytes")
			data := p.stream[offset : offset+bytes]
			builder.WriteString(string(data))

		default:
			jsonData, err := json.Marshal(e)
			if err != nil {
				fmt.Println("Error encoding JSON:", err)
			}
			fmt.Println(string(jsonData))
			continue
		}
	}

	session := builder.String()
	ansiRegex := regexp.MustCompile("\x1b\\[(?:[0-9]{1,2}(?:;[0-9]{1,2})*)?[m|K]")
	sessionCleaned := ansiRegex.ReplaceAllString(session, "")

	sessionList := strings.Split(session, "\r\n")
	sessionListCleaned := strings.Split(sessionCleaned, "\r\n")
	extRec := extendedRecord{
		Event: "print",
		Session: sessionList,
		SessionCleaned: sessionListCleaned,
	}

	jsonData, err := json.Marshal(extRec)
	if err != nil {
		fmt.Println("Error encoding JSON:", err)
	}
	fmt.Println(string(jsonData))
}

// applyDelay waits until it is time to play back the current event.
// It returns the duration from the start of the session up until the current event.
func (p *sessionPlayer) applyDelay(previousTimestamp time.Duration, e events.EventFields) time.Duration {
	eventTime := time.Duration(e.GetInt("ms") * int(time.Millisecond))
	delay := eventTime - previousTimestamp

	// make playback smoother:
	switch {
	case delay < 10*time.Millisecond:
		delay = 0
	case delay > 250*time.Millisecond && delay < 500*time.Millisecond:
		delay = 250 * time.Millisecond
	case delay > 500*time.Millisecond && delay < 1*time.Second:
		delay = 500 * time.Millisecond
	case delay > time.Second:
		delay = time.Second
	}

	timestampFrame(p.term, e.GetString("time"))
	p.clock.Sleep(delay)
	return eventTime
}
