import { type FC } from "react";

export const Icons = [
  'alert',
	'bell',
	'success'

] as const;
export type IconType = typeof Icons[number];

export type IconComponent = {
  [key in IconType]: FC<IconProps>;
}

export const IconSizes = [16, 20, 24, 32, 40, 60];
export type IconSize = typeof IconSizes[number];

export interface IconProps {
  color?: string;
  size?: IconSize;
}