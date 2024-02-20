import React, { type FC } from "react";
import { AlertCardVariants, AlertIconVariants, AlertTextVariants, AlertVariant } from "./Alert";
import { getIcon } from "../../utils/icon.utils";
import { CrossIcon } from "../icons/cross/Cross.icon";
import { Colors } from "../../utils/colors";
import { IconType } from "../../utils/icon.types";

interface AlertContentProps {
  onClose: () => void;
  label: string;
	variant: AlertVariant;
}

export const AlertContent: FC<AlertContentProps> = ({ onClose, label, variant }) => {
	const iconVariant = AlertIconVariants[variant];
	const Icon = getIcon(iconVariant.id as IconType);

  return (
    <div className={AlertCardVariants({ color: variant })}>
			<div className="flex flex-row space-x-4 justify-between">
				<Icon color={iconVariant.color}/>
				<span className={AlertTextVariants({ color: variant })}>{label}</span>
			</div>
			<button aria-label="Close alert" onClick={onClose}>
				<CrossIcon color={Colors.black}/>
			</button>
    </div>
  );
}