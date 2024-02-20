import React, { type FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AlertVariant, AlertCardVariants, AlertIconVariants, AlertTextVariants } from './Alert';
import { getSVGIcon } from '../../utils/icon.utils';
import Cross from '../../components/icons/cross/cross.svg';
import { Colors } from '../../utils/colors';
import { IconType } from '../../utils/icon.types';

interface AlertContentProps {
  onClose: () => void;
  label: string;
	variant: AlertVariant
}

export const AlertContent: FC<AlertContentProps> = ({ onClose, label, variant }) => {
	const iconVariants = AlertIconVariants[variant];
	const Icon = getSVGIcon(iconVariants.id as IconType);

  return (
    <View className={AlertCardVariants({ color: variant })}>
			<View className="flex flex-row space-x-4 justify-between">
				<Icon stroke={iconVariants.color}/>
				<Text accessible accessibilityLabel={label} className={AlertTextVariants({ color: variant })}>{label}</Text>
			</View>
			<Pressable
				accessible
				accessibilityLabel='Close alert'
				className="self-end"
				onPress={onClose}
			>
				<Cross stroke={Colors.black}/>
			</Pressable>
    </View>
  );
}