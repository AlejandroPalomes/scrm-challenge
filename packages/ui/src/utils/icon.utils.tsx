import { type FC } from 'react';
import { AlertIcon } from '../components/Alert.icon';
import type { IconType, IconComponent, IconProps } from './icon.types';

const IconsComponent: IconComponent = {
  alert: AlertIcon,
  bell: AlertIcon,
  success: AlertIcon
};

export const getIcon = (name: IconType): FC<IconProps> => {
  const icon = IconsComponent[name];
  return icon;
};