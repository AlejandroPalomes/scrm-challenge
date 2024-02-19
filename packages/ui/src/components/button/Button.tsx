import React, { type FC } from "react";
import { ButtonContent } from "./ButtonContent";

type ButtonVariant = 'primary' | 'alternative' | 'secondary';
export interface ButtonProps {
  onClick?: () => void;
  label: string;
	variant?: ButtonVariant;
	test?: string;
}

const getVariantStyles = (variant: ButtonVariant): string => {
	switch (variant) {
		case 'alternative':
			return 'bg-purple text-white';
		case 'secondary':
			return 'border border-solid border-gray3 text-gray4 hover:border-black transition duration-150';
		case 'primary':
		default:
			return 'bg-pink text-white hover:bg-pinkDark transition duration-150';
	}
}

export const Button: FC<ButtonProps> = ({ onClick, label, variant = 'primary', test }) => {

	const variantStyles = getVariantStyles(variant);
  const handleOnClick = () => {
    onClick && onClick();
		test && console.log(test);
  }

  return (
    <ButtonContent className={test || `rounded-lg py-4 px-14 w-fit ${variantStyles}`} onClick={handleOnClick} label={label}/>
  );
}