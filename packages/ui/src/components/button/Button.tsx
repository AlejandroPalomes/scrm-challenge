import React, { type FC } from "react";
import { ButtonContent } from "./ButtonContent";

export type ButtonVariant = 'primary' | 'alternative' | 'secondary';
export interface ButtonProps {
  onPress?: () => void;
  label: string;
	variant?: ButtonVariant;
	disabled?: boolean;
}

type VariantStylesI = {
	[key in ButtonVariant]: {
		getMain: (disabled?: boolean) => string,
		text: string
	};
}

interface ButtonSyles {
	animation: string;
	getBase: (disabled?: boolean) => string;
	variant: VariantStylesI;
}

export const VariantStyles: ButtonSyles = {
	animation: 'transition duration-150',
	getBase: (disabled) => `rounded-lg py-3.5 px-14 w-fit ${disabled ? 'opacity-50' : ''}`,
	variant: {
		alternative: {
			getMain: (disabled) => `bg-purple ${!disabled ? 'hover:bg-purpleDark active:bg-purpleDark' : ''}`,
			text: 'text-white',
		},
		secondary: {
			getMain: (disabled) => `border border-solid border-gray3 ${!disabled ? 'hover:border-black active:border-black' : ''}`,
			text: 'text-gray4'
		},
		primary: {
			getMain: (disabled) => `bg-pink text-white ${!disabled ? 'hover:bg-pinkDark active:bg-pinkDark' : ''}`,
			text: 'text-white'
		}}
}

export const Button: FC<ButtonProps> = ({ onPress, label, variant = 'primary', disabled = false }) => {

  const handleOnClick = () => {
    onPress && onPress();
  }

  return (
    <ButtonContent variant={variant} onClick={handleOnClick} label={label} disabled={disabled}/>
  );
}