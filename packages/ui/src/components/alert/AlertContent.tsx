import React, { type FC } from "react";
import { AlertVariant, AlertVariantStyles } from "./Alert";
import { AlertIcon } from "../icons/Alert.icon";
import AlertSvg from "../icons/alert.svg";

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

  return (
    <div className={fullStyles} onClick={onClick}>
			<img src={AlertSvg}/>
			{/* <AlertIcon color={styles.icon}/> */}
			{label}
    </div>
  );
}