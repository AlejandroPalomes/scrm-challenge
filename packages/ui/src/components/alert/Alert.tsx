import React, { type FC } from "react";
import { AlertContent } from "./AlertContent";
import { Colors } from "../../utils/colors";
import { tv } from "tailwind-variants";

export type AlertVariant = 'error' | 'success' | 'notification';
export interface AlertProps {
  onClose?: () => void;
  label: string;
	variant: AlertVariant;
}

export const AlertCardVariants = tv({
  base: 'rounded-lg py-3 px-6 flex flex-row space-x-4 justify-between',
  variants: {
    color: {
      error: 'bg-error-light',
      success: 'bg-success-light',
      notification: 'bg-notification-light'
    }
  },
	defaultVariants: {
    color: 'success',
    text: 'success'
  }
});

export const AlertTextVariants = tv({
  variants: {
    color: {
      error: 'text-error-regular',
      success: 'text-success-regular',
      notification: 'text-notification-regular'
    }
  },
	defaultVariants: {
    color: 'success',
    text: 'success'
  }
});

export const AlertIconVariants = {
	success: {
		id: 'success',
		color: Colors.success.regular
	},
	error: {
		id: 'alert',
		color: Colors.error.regular
	},
	notification: {
		id: 'bell',
		color: Colors.notification.regular
	}
}

export const Alert: FC<AlertProps> = ({ onClose, label, variant }) => {

  const handleOnClose = () => {
    onClose && onClose();
  }

  return (
    <AlertContent variant={variant} onClose={handleOnClose} label={label}/>
  );
}