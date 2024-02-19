import React, { type FC } from "react";
import { AlertContent } from "./AlertContent";

export type AlertVariant = 'error' | 'success' | 'notification';
export interface AlertProps {
  onClose?: () => void;
  label: string;
	variant: AlertVariant;
}

type VariantStylesI = {
	[key in AlertVariant]: {
		main: string,
		text: string
	};
}

interface AlertStyles {
	animation: string;
	base: string;
	variant: VariantStylesI;
}

export const AlertVariantStyles: AlertStyles = {
	animation: 'transition duration-150',
	base: 'rounded-lg py-3 px-6 w-fit',
	variant: {
		error: {
			main: 'bg-success opacity-5',
			text: 'text-white',
		},
		success: {
			main: 'bg-success opacity-50',
			text: 'text-gray4'
		},
		notification: {
			main: 'bg-notification opacity-50 text-white',
			text: 'text-white'
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