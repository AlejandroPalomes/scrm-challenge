import React, { type FC } from "react";
import { ButtonContent } from "./ButtonContent";
import { tv } from "tailwind-variants";

export type ButtonVariant = 'primary' | 'alternative' | 'secondary';
export interface ButtonProps {
  onPress?: () => void;
  label: string;
	variant?: ButtonVariant;
	disabled?: boolean;
	expand?: boolean;
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

export const ButtonVariants = tv({
  base: 'rounded-lg py-3.5 px-14 w-fit transition duration-150',
  variants: {
    color: {
      alternative: 'bg-purple',
      secondary: 'border border-solid border-gray3',
      primary: 'bg-pink'
    },
		disabled: {
			true: 'opacity-50'
		},
		expand: {
			false: 'self-center',
			true: 'w-full'
		}
  },
	defaultVariants: {
    color: 'primary',
		disabled: false,
		expand: false
  },
	compoundVariants: [
    {
      color: 'alternative',
      disabled: false,
      className: 'hover:bg-purpleDark active:bg-purpleDark'
    },
    {
      color: 'secondary',
      disabled: false,
      className: 'hover:border-black active:border-black'
    },
    {
      color: 'primary',
      disabled: false,
      className: 'hover:bg-pinkDark active:bg-pinkDark'
    }
  ]
});

export const ButtonTextVariants = tv({
	base: 'self-center',
	variants: {
		color: {
			alternative: 'text-white',
			secondary: 'text-gray4',
			primary: 'text-white'
		}
	}
});

export const Button: FC<ButtonProps> = ({ onPress, label, variant = 'primary', disabled = false, expand = false }) => {

  const handleOnClick = () => {
    onPress && onPress();
  }

  return (
    <ButtonContent variant={variant} onClick={handleOnClick} label={label} disabled={disabled} expand={expand}/>
  );
}