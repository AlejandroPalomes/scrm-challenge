/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import HelloWorld, { Alert, AlertVariant, Button } from '@acme/ui';
import { Section } from './components/Section';

function App(): React.JSX.Element {
	const [isAlertShown, setIsAlertShown] = useState<boolean>(false);
	const [alertType, setAlertType] = useState<AlertVariant>('success');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white
  };

	const handleOnClickError = () => {
		setAlertType('error');
		setIsAlertShown(true);
	}

	const handleOnClickSuccess = () => {
		setAlertType('success');
		setIsAlertShown(true);
	}

	const handleOnClickNotification = () => {
		setAlertType('notification');
		setIsAlertShown(true);
	}

	const handleOnClickCloseError = () => {
		setIsAlertShown(false);
	}

  return (
    <SafeAreaView style={backgroundStyle} className="h-full">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
			>
				<Section title={HelloWorld}>
					<View className="flex flex-col w-fit space-y-4">
						<Text className="bg-error">
							And welcome to this challenge, SCRM x Alejandro Palomes.
						</Text>
						<Text>
							The main idea was to develop a Button and an Alert components, both compatible with React and React Native. Here's an example of how the components look inside a React Native app:
						</Text>
					</View>
				</Section>
				<View className="py-4">
					<Button label="Show Success" onPress={handleOnClickSuccess}/>
				</View>
				<View className="py-4">
					<Button label="Show Notification" variant="alternative" onPress={handleOnClickNotification}/>
				</View>
				<View className="py-4">
					<Button label="Show Error" variant="secondary" onPress={handleOnClickError}/>
				</View>
				{isAlertShown && <View className="px-4">
					<Alert variant={alertType} label={`${alertType}: This is a message`} onClose={handleOnClickCloseError}/>
				</View>}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
