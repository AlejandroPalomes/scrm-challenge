import React, { type FC } from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  onClick: () => void;
  label: string;
	className: string;
}

export const ButtonContent: FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <Pressable
			className={className}
      onPress={onClick}
    >
			<Text>Native</Text>
      <Text>{label}</Text>
    </Pressable>
  );
}