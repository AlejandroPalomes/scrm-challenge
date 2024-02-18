import React, { type FC } from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
	className: string;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, className }) => {

  const handleOnClick = () => {
    onClick && onClick();
  }

  return (
    <div
      // className="text-red-600"
      className={`cursor-pointer ${className}`}
      onClick={handleOnClick}
    >
			React - {label}
    </div>
  );
}