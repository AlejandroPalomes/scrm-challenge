import React, { type FC } from "react";
import { AlertVariant, AlertVariantStyles } from "./Alert";
import { getIcon } from "../../utils/icon.utils";
import { CrossIcon } from "../icons/cross/Cross.icon";
import { Colors } from "../../utils/colors";

interface AlertContentProps {
  onClose: () => void;
  label: string;
	variant: AlertVariant;
}

export const AlertContent: FC<AlertContentProps> = ({ onClose, label, variant }) => {
	const styles = AlertVariantStyles.variant[variant];
	const fullStyles = [
		styles.main,
		AlertVariantStyles.base,
		AlertVariantStyles.spacing
	].join(' ');

	const Icon = getIcon(styles.icon.svg);

  return (
    <div className={fullStyles}>
			<div className={AlertVariantStyles.spacing}>
				<Icon color={styles.icon.color}/>
				<span className={styles.text}>{label}</span>
			</div>
			<button onClick={onClose}>
				<CrossIcon color={Colors.black}/>
			</button>
    </div>
  );
}