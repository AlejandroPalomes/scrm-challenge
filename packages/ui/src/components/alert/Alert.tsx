import React, { type FC } from "react";
import { AlertContent } from "./AlertContent";
import { Colors } from "../../utils/colors";
import { IconType } from "../../utils/icon.types";

export type AlertVariant = 'error' | 'success' | 'notification';
export interface AlertProps {
  onClose?: () => void;
  label: string;
	variant: AlertVariant;
}

type VariantStylesI = {
	[key in AlertVariant]: {
		main: string,
		text: string,
		icon: {
			color: string,
			svg: IconType
		}
	};
}

interface AlertStyles {
	animation: string;
	base: string;
	variant: VariantStylesI;
}

export const AlertVariantStyles: AlertStyles = {
	animation: 'transition duration-150',
	base: 'rounded-lg py-3 px-6 flex flex-row space-x-4',
	variant: {
		error: {
			main: 'bg-error-light',
			text: 'text-error-regular',
			icon: {
				color: Colors.error.regular,
				svg: 'alert'
			}
		},
		success: {
			main: 'bg-success-light',
			text: 'text-success-regular',
			icon: {
				color: Colors.success.regular,
				svg: 'success'
			}
		},
		notification: {
			main: 'bg-notification-light text-notification-regular',
			text: 'text-notification-regular',
			icon: {
				color: Colors.notification.regular,
				svg: 'bell'
			}
		}}
}

export const Alert: FC<AlertProps> = ({ onClose, label, variant }) => {

  const handleOnClose = () => {
    onClose && onClose();
  }

  return (
    <AlertContent variant={variant} onClick={handleOnClose} label={label}/>
  );
}