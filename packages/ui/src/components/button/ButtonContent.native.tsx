import React, { type FC } from "react";
import { Pressable, Text } from "react-native";

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
    <Pressable
      // className={className}
			className="text-red-600"
      onPress={handleOnClick}
    >
			<Text>Native</Text>
      <Text>{label}</Text>
    </Pressable>
  );
}