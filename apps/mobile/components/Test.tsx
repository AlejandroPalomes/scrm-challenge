
import React, { FC } from 'react';
import {
	Pressable,
  Text
} from 'react-native';

export const Test: FC = () => {
  return (
    <Pressable className="rounded-lg py-4 px-14 w-fit bg-pink text-white active:bg-pinkDark">
			<Text>This is button in a component</Text>
		</Pressable>
  );
}

