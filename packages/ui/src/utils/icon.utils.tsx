import { type FC } from 'react';
import type { IconType, IconComponent, IconProps, IconSVG } from './icon.types';
import AlertSvg from '../components/icons/alert/alert.svg';
import { AlertIcon } from '../components/icons/alert/Alert.icon';
import BellSvg from '../components/icons/bell/bell.svg';
import { BellIcon } from '../components/icons/bell/Bell.icon';
import CrossSvg from '../components/icons/cross/cross.svg';
import { CrossIcon } from '../components/icons/cross/Cross.icon';
import SuccessSvg from '../components/icons/success/success.svg';
import { SuccessIcon } from '../components/icons/success/Success.icon';

const IconsComponent: IconComponent = {
  alert: AlertIcon,
  bell: BellIcon,
	cross: CrossIcon,
  success: SuccessIcon
};

const IconsSVG: IconSVG = {
  alert: AlertSvg,
  bell: BellSvg,
	cross: CrossSvg,
  success: SuccessSvg
};

export const getIcon = (name: IconType): FC<IconProps> => {
  const icon = IconsComponent[name];
  return icon;
};

export const getSVGIcon = (name: IconType) => {
  const icon = IconsSVG[name];
  return icon;
};