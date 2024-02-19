import { PropsWithChildren } from "react";
import { Text, View, useColorScheme } from "react-native";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const Section = ({children, title}: SectionProps): React.JSX.Element => {
  return (
    <View className="px-6 mt-8">
      <Text className="text-2xl font-semibold mb-6 text-black">
        {title}
      </Text>
			{children}
    </View>
  );
}
