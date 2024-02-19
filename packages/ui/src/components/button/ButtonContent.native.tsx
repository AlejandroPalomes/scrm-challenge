import React, { type FC } from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonVariant, VariantStyles } from './Button';

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant?: ButtonVariant
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, variant = 'primary' }) => {
	const styles = VariantStyles.variant[variant];
	const fullStyles = [styles.main, VariantStyles.base].join(' ')

  return (
    <Pressable
			className={fullStyles}
      onPress={onClick}
    >
      <Text className={styles.text + ' w-fit'}>{label} (Native)</Text>
    </Pressable>
  );
}