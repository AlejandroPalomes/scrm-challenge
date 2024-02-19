import { type FC } from 'react';
import { AlertIcon } from '../components/icons/alert/Alert.icon';
import AlertSvg from '../components/icons/alert/alert.svg';
import BellSvg from '../components/icons/bell/bell.svg';
import SuccessSvg from '../components/icons/success/success.svg';
import type { IconType, IconComponent, IconProps, IconSVG } from './icon.types';
import { BellIcon } from '../components/icons/bell/Bell.icon';
import { SuccessIcon } from '../components/icons/success/Success.icon';
import { ImageSourcePropType } from 'react-native';

const IconsComponent: IconComponent = {
  alert: AlertIcon,
  bell: BellIcon,
  success: SuccessIcon
};

const IconsSVG: IconSVG = {
  alert: AlertSvg,
  bell: BellSvg,
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