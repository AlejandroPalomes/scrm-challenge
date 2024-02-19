import React, { type FC } from "react";
import { ButtonVariant, VariantStyles } from "./Button";

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant: ButtonVariant;
	disabled?: boolean;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, variant, disabled }) => {
	const styles = VariantStyles.variant[variant];
	const fullStyles = [
		!disabled ? 'cursor-pointer' : '',
		styles.getMain(disabled),
		styles.text,
		VariantStyles.animation,
		VariantStyles.getBase(disabled)
	].join(' ');

  return (
    <button className={fullStyles} onClick={onClick} disabled={disabled}>
			{label}
    </button>
  );
}