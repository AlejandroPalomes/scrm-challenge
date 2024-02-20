import { type FC } from 'react';
import { type IconProps } from '../../../utils/icon.types';

export const AlertIcon: FC<IconProps> = ({ color = '#FFFFFF', size = 24}) => {
  return (
    <svg width={size} height={size} stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<desc>Alert icon</desc>
			<path
				d="M10.29 3.85996L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9961 3.53002 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.85996C13.5318 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3438 2.89722 12 2.89722C11.6563 2.89722 11.3184 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996V3.85996Z"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12 9V13"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12 16V16.5"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
  );
};
