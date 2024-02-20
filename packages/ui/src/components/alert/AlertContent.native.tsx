import React, { type FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AlertVariant, AlertVariantStyles } from './Alert';
import { getSVGIcon } from '../../utils/icon.utils';
import Cross from '../../components/icons/cross/cross.svg';
import { Colors } from '../../utils/colors';

interface AlertContentProps {
  onClose: () => void;
  label: string;
	variant: AlertVariant
}

export const AlertContent: FC<AlertContentProps> = ({ onClose, label, variant }) => {
	const styles = AlertVariantStyles.variant[variant];
	const fullStyles = [styles.main, AlertVariantStyles.base, AlertVariantStyles.spacing].join(' ')
	const Icon = getSVGIcon(styles.icon.svg);

  return (
    <View className={fullStyles}>
			<View className={AlertVariantStyles.spacing}>
				<Icon stroke={styles.icon.color}/>
				<Text className={styles.text}>{label}</Text>
			</View>
			<Pressable className="self-end" onPress={onClose}>
				<Cross stroke={Colors.black}/>
			</Pressable>
    </View>
  );
}