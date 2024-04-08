/**
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

import { SVGIcon } from './SVGIcon';

import type { SVGIconProps } from './common';

export function IntegrationsIcon({ size = 14, fill }: SVGIconProps) {
  return (
    <SVGIcon viewBox="0 0 14 14" size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.05 3.5H2.45C3.02881 3.5 3.5 3.02881 3.5 2.45V1.05C3.5 0.471188 3.02881 0 2.45 0H1.05C0.471188 0 0 0.471188 0 1.05V2.45C0 3.02881 0.471188 3.5 1.05 3.5ZM0.7 1.05C0.7 0.856625 0.856625 0.7 1.05 0.7H2.45C2.64337 0.7 2.8 0.856625 2.8 1.05V2.45C2.8 2.64337 2.64337 2.8 2.45 2.8H1.05C0.856625 2.8 0.7 2.64337 0.7 2.45V1.05ZM2.45 8.40009H1.05C0.471188 8.40009 0 7.9289 0 7.35008V5.95009C0 5.37127 0.471188 4.90009 1.05 4.90009H2.45C3.02881 4.90009 3.5 5.37127 3.5 5.95009V7.35008C3.5 7.9289 3.02881 8.40009 2.45 8.40009ZM1.05 5.60009C0.856625 5.60009 0.7 5.75671 0.7 5.95009V7.35008C0.7 7.54346 0.856625 7.70009 1.05 7.70009H2.45C2.64337 7.70009 2.8 7.54346 2.8 7.35008V5.95009C2.8 5.75671 2.64337 5.60009 2.45 5.60009H1.05ZM2.45 13.3H1.05C0.471188 13.3 0 12.8288 0 12.25V10.85C0 10.2711 0.471188 9.79996 1.05 9.79996H2.45C3.02881 9.79996 3.5 10.2711 3.5 10.85V12.25C3.5 12.8288 3.02881 13.3 2.45 13.3ZM1.05 10.5C0.856625 10.5 0.7 10.6566 0.7 10.85V12.25C0.7 12.4433 0.856625 12.6 1.05 12.6H2.45C2.64337 12.6 2.8 12.4433 2.8 12.25V10.85C2.8 10.6566 2.64337 10.5 2.45 10.5H1.05ZM7.35008 13.3H5.95009C5.37127 13.3 4.90009 12.8288 4.90009 12.25V10.85C4.90009 10.2711 5.37127 9.79996 5.95009 9.79996H7.35008C7.9289 9.79996 8.40009 10.2711 8.40009 10.85V12.25C8.40009 12.8288 7.9289 13.3 7.35008 13.3ZM5.95009 10.5C5.75671 10.5 5.60009 10.6566 5.60009 10.85V12.25C5.60009 12.4433 5.75671 12.6 5.95009 12.6H7.35008C7.54346 12.6 7.70009 12.4433 7.70009 12.25V10.85C7.70009 10.6566 7.54346 10.5 7.35008 10.5H5.95009ZM10.8502 13.3H12.2502C12.829 13.3 13.3002 12.8288 13.3002 12.25V10.85C13.3002 10.2711 12.829 9.79996 12.2502 9.79996H10.8502C10.2714 9.79996 9.80017 10.2711 9.80017 10.85V12.25C9.80017 12.8288 10.2714 13.3 10.8502 13.3ZM10.5002 10.85C10.5002 10.6566 10.6568 10.5 10.8502 10.5H12.2502C12.4435 10.5 12.6002 10.6566 12.6002 10.85V12.25C12.6002 12.4433 12.4435 12.6 12.2502 12.6H10.8502C10.6568 12.6 10.5002 12.4433 10.5002 12.25V10.85ZM5.95009 8.40009H7.35008C7.9289 8.40009 8.40009 7.9289 8.40009 7.35008V5.95009C8.40009 5.37127 7.9289 4.90009 7.35008 4.90009H5.95009C5.37127 4.90009 4.90009 5.37127 4.90009 5.95009V7.35008C4.90009 7.9289 5.37127 8.40009 5.95009 8.40009ZM5.60009 5.95009C5.60009 5.75671 5.75671 5.60009 5.95009 5.60009H7.35008C7.54346 5.60009 7.70009 5.75671 7.70009 5.95009V7.35008C7.70009 7.54346 7.54346 7.70009 7.35008 7.70009H5.95009C5.75671 7.70009 5.60009 7.54346 5.60009 7.35008V5.95009ZM12.2502 8.40009H10.8502C10.2714 8.40009 9.80017 7.9289 9.80017 7.35008V5.95009C9.80017 5.37127 10.2714 4.90009 10.8502 4.90009H12.2502C12.829 4.90009 13.3002 5.37127 13.3002 5.95009V7.35008C13.3002 7.9289 12.829 8.40009 12.2502 8.40009ZM10.8502 5.60009C10.6568 5.60009 10.5002 5.75671 10.5002 5.95009V7.35008C10.5002 7.54346 10.6568 7.70009 10.8502 7.70009H12.2502C12.4435 7.70009 12.6002 7.54346 12.6002 7.35008V5.95009C12.6002 5.75671 12.4435 5.60009 12.2502 5.60009H10.8502ZM7.35008 3.5H5.95009C5.37127 3.5 4.90009 3.02881 4.90009 2.45V1.05C4.90009 0.471188 5.37127 0 5.95009 0H7.35008C7.9289 0 8.40009 0.471188 8.40009 1.05V2.45C8.40009 3.02881 7.9289 3.5 7.35008 3.5ZM5.95009 0.7C5.75671 0.7 5.60009 0.856625 5.60009 1.05V2.45C5.60009 2.64337 5.75671 2.8 5.95009 2.8H7.35008C7.54346 2.8 7.70009 2.64337 7.70009 2.45V1.05C7.70009 0.856625 7.54346 0.7 7.35008 0.7H5.95009ZM10.8502 3.5H12.2502C12.829 3.5 13.3002 3.02881 13.3002 2.45V1.05C13.3002 0.471188 12.829 0 12.2502 0H10.8502C10.2714 0 9.80017 0.471188 9.80017 1.05V2.45C9.80017 3.02881 10.2714 3.5 10.8502 3.5ZM10.5002 1.05C10.5002 0.856625 10.6568 0.7 10.8502 0.7H12.2502C12.4435 0.7 12.6002 0.856625 12.6002 1.05V2.45C12.6002 2.64337 12.4435 2.8 12.2502 2.8H10.8502C10.6568 2.8 10.5002 2.64337 10.5002 2.45V1.05Z"
      />
    </SVGIcon>
  );
}
