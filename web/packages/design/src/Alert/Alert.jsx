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

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { space, color, width } from 'design/system';
import { fade } from 'design/theme/utils/colorManipulator';

const kind = props => {
  const { kind, theme } = props;
  switch (kind) {
    case 'danger':
      return {
        background: theme.colors.error.main,
        color: theme.colors.buttons.warning.text,
      };
    case 'info':
      return {
        background: theme.colors.info,
        color: theme.colors.text.primaryInverse,
      };
    case 'warning':
      return {
        background: theme.colors.warning.main,
        color: theme.colors.text.primaryInverse,
      };
    case 'success':
      return {
        background: theme.colors.success.main,
        color: theme.colors.text.primaryInverse,
      };
    case 'outline-danger':
      return {
        background: fade(theme.colors.error.main, 0.1),
        border: `${theme.radii[1]}px solid ${theme.colors.error.main}`,
        borderRadius: `${theme.radii[3]}px`,
        boxShadow: 'none',
        justifyContent: 'normal',
      };
    case 'outline-info':
      return {
        background: fade(theme.colors.link, 0.1),
        border: `${theme.radii[1]}px solid ${theme.colors.link}`,
        borderRadius: `${theme.radii[3]}px`,
        boxShadow: 'none',
        justifyContent: 'normal',
      };
    default:
      return {
        background: theme.colors.error.main,
        color: theme.colors.text.primaryInverse,
      };
  }
};

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii[1]}px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.24);
  margin: 0 0 24px 0;
  min-height: 40px;
  padding: 8px 16px;
  overflow: auto;
  word-break: break-word;
  line-height: 1.5;
  ${space}
  ${kind}
  ${width}

  a {
    color: ${({ theme }) => theme.colors.light};
  }
`;

Alert.propTypes = {
  kind: PropTypes.oneOf([
    'danger',
    'info',
    'warning',
    'success',
    'outline-danger',
    'outline-info',
  ]),
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
};

Alert.defaultProps = {
  kind: 'danger',
};

Alert.displayName = 'Alert';

export default Alert;
export const Danger = props => <Alert kind="danger" {...props} />;
export const Info = props => <Alert kind="info" {...props} />;
export const Warning = props => <Alert kind="warning" {...props} />;
export const Success = props => <Alert kind="success" {...props} />;
export const OutlineDanger = props => (
  <Alert kind="outline-danger" {...props} />
);
export const OutlineInfo = props => <Alert kind="outline-info" {...props} />;
