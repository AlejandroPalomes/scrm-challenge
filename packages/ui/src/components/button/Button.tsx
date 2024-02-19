import React, { type FC } from "react";
import { ButtonContent } from "./ButtonContent";

export type ButtonVariant = 'primary' | 'alternative' | 'secondary';
export interface ButtonProps {
  onClick?: () => void;
  label: string;
	variant?: ButtonVariant;
}

type VariantStylesI = {
	[key in ButtonVariant]: {
		main: string,
		text: string
	};
}

interface ButtonSyles {
	animation: string;
	base: string;
	variant: VariantStylesI;
}

export const VariantStyles: ButtonSyles = {
	animation: 'transition duration-150',
	base: 'rounded-lg py-4 px-14 w-fit',
	variant: {
		alternative: {
			main: 'bg-purple',
			text: 'text-white',
		},
		secondary: {
			main: 'border border-solid border-gray3 hover:border-black, active:border-black',
			text: 'text-gray4'
		},
		primary: {
			main: 'bg-pink text-white hover:bg-pinkDark active:bg-pinkDark',
			text: 'text-white'
		}}
}

export const Button: FC<ButtonProps> = ({ onClick, label, variant = 'primary' }) => {

  const handleOnClick = () => {
    onClick && onClick();
  }

  return (
    <ButtonContent variant={variant} onClick={handleOnClick} label={label}/>
  );
}