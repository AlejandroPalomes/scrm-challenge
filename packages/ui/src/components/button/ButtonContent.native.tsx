import React, { type FC } from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonTextVariants, ButtonVariant, ButtonVariants } from './Button';

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant?: ButtonVariant
	disabled?: boolean;
	expand?: boolean;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, variant = 'primary', disabled, expand }) => {
  return (
    <Pressable
			className={ButtonVariants({ color: variant, disabled, expand})}
      onPress={onClick}
			disabled={disabled}
    >
      <Text className={ButtonTextVariants({ color: variant })}>{label}</Text>
    </Pressable>
  );
}