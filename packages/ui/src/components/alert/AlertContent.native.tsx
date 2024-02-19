import React, { type FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AlertVariant, AlertVariantStyles } from './Alert';

interface ButtonProps {
  onClose: () => void;
  label: string;
	variant: AlertVariant
}

export const AlertContent: FC<ButtonProps> = ({ onClose, label, variant }) => {
	const styles = AlertVariantStyles.variant[variant];
	const fullStyles = [styles.main, AlertVariantStyles.base].join(' ')

  return (
    <View className={fullStyles}>
      <Text className={styles.text + ' self-start'}>{label}</Text>
    </View>
  );
}