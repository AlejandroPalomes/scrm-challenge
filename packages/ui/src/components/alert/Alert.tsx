import React, { type FC } from "react";
import { AlertContent } from "./AlertContent";
import { Colors } from "../../utils/colors";

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
		icon: string
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
			icon: Colors.error.regular
		},
		success: {
			main: 'bg-success-light',
			text: 'text-success-regular',
			icon: Colors.success.regular
		},
		notification: {
			main: 'bg-notification-light text-notification-regular',
			text: 'text-notification-regular',
			icon: Colors.notification.regular
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