import { type FC } from 'react';
import { type IconProps } from '../../../utils/icon.types';

export const CrossIcon: FC<IconProps> = ({ color = '#FFFFFF', size = 24}) => {
  return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
			<desc>Cross icon</desc>
			<path
				d="M18 6L6 18"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M6 6L18 18"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
  );
};
