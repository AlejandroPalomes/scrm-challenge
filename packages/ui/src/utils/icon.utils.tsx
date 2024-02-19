import { type FC } from 'react';
import { AlertIcon } from '../components/icons/alert/Alert.icon';
import AlertSvg from '../components/icons/alert/alert.svg';
import BellSvg from '../components/icons/bell/bell.svg';
import SuccessSvg from '../components/icons/success/success.svg';
import type { IconType, IconComponent, IconProps } from './icon.types';
import { BellIcon } from '../components/icons/bell/Bell.icon';
import { SuccessIcon } from '../components/icons/success/Success.icon';

const IconsComponent: IconComponent = {
  alert: AlertIcon,
  bell: BellIcon,
  success: SuccessIcon
};

const IconsSVG: IconComponent = {
  alert: AlertSvg,
  bell: AlertSvg,
  success: AlertSvg
};

export const getIcon = (name: IconType): FC<IconProps> => {
  const icon = IconsComponent[name];
  return icon;
};

export const getSVGIcon = (name: IconType): FC<IconProps> => {
  const icon = IconsComponent[name];
  return icon;
};