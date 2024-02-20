import React, { type FC } from "react";
import { ButtonTextVariants, ButtonVariant, ButtonVariants } from "./Button";

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant: ButtonVariant;
	disabled?: boolean;
	expand?: boolean;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, variant, disabled, expand }) => {
	const fullStyles = [
		ButtonVariants({ color: variant, disabled, expand }),
		ButtonTextVariants({ color: variant })
	].join(' ');

  return (
    <button aria-label={label} className={fullStyles} onClick={onClick} disabled={disabled}>
			{label}
    </button>
  );
}