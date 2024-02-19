import React, { type FC } from "react";
import { AlertVariant, AlertVariantStyles } from "./Alert";
import { getIcon } from "../../utils/icon.utils";

interface ButtonProps {
  onClick: () => void;
  label: string;
	variant: AlertVariant;
	disabled?: boolean;
}

export const AlertContent: FC<ButtonProps> = ({ onClick, label, variant, disabled }) => {
	const styles = AlertVariantStyles.variant[variant];
	const fullStyles = [
		styles.main,
		styles.text,
		AlertVariantStyles.animation,
		AlertVariantStyles.base
	].join(' ');

	const Icon = getIcon(styles.icon.svg);

  return (
    <div className={fullStyles} onClick={onClick}>
			<Icon color={styles.icon.color}/>
			<span>{label}</span>
    </div>
  );
}