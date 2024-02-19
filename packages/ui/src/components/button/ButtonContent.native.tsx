import React, { type FC } from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonVariant, VariantStyles } from './Button';

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant?: ButtonVariant
	disabled?: boolean;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, variant = 'primary', disabled }) => {
	const styles = VariantStyles.variant[variant];
	const fullStyles = [styles.getMain(disabled), VariantStyles.getBase(disabled), 'self-center'].join(' ')

  return (
    <Pressable
			className={fullStyles}
      onPress={onClick}
			disabled={disabled}
    >
      <Text className={styles.text + ' self-center'}>{label}</Text>
    </Pressable>
  );
}