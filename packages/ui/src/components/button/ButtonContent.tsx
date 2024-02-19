import React, { type FC } from "react";
import { ButtonVariant, VariantStyles } from "./Button";

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant: ButtonVariant;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, variant }) => {
	const styles = VariantStyles.variant[variant];
	const fullStyles = ['cursor-pointer', styles.main, styles.text, VariantStyles.animation, VariantStyles.base].join(' ')
  return (
    <button
      className={fullStyles}
      onClick={onClick}
    >
			React - {label}
    </button>
  );
}