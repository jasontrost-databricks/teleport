/*
 * Teleport
 * Copyright (C) 2024  Gravitational, Inc.
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

package services

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestCompareResources(t *testing.T) {
	compareTestCase(t, "cmp equal", compareResource{true}, compareResource{true}, Equal)
	compareTestCase(t, "cmp not equal", compareResource{true}, compareResource{false}, Different)

	// These results should be forced since we're going through a custom compare function.
	compareTestCase(t, "IsEqual equal", &compareResourceWithEqual{true}, &compareResourceWithEqual{false}, Equal)
	compareTestCase(t, "IsEqual not equal", &compareResourceWithEqual{false}, &compareResourceWithEqual{false}, Different)
}

func compareTestCase[T any](t *testing.T, name string, resA, resB T, expected int) {
	t.Run(name, func(t *testing.T) {
		require.Equal(t, expected, CompareResources(resA, resB))
	})
}

type compareResource struct {
	Field bool
}

type compareResourceWithEqual struct {
	ForceCompare bool
}

func (r *compareResourceWithEqual) IsEqual(_ *compareResourceWithEqual) bool {
	return r.ForceCompare
}
