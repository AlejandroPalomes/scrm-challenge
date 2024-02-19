import React, { type FC } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
	className: string;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
			React - {label}
    </div>
  );
}