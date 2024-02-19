import React, { type FC } from "react";
import { AlertVariant, AlertVariantStyles } from "./Alert";

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant: AlertVariant;
	disabled?: boolean;
}

export const AlertContent: FC<ButtonProps> = ({ onClick, label, variant, disabled }) => {
	const styles = AlertVariantStyles.variant[variant];
	const fullStyles = [
		!disabled ? 'cursor-pointer' : '',
		styles.main,
		styles.text,
		AlertVariantStyles.animation,
		AlertVariantStyles.base
	].join(' ');

  return (
    <div className={fullStyles} onClick={onClick}>
			{label}
    </div>
  );
}