/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import HelloWorld, { Button } from '@acme/ui';
import { Section } from './components/Section';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Section title={HelloWorld}>
					<View className="flex flex-col w-fit space-y-4">
						<Text>
							And welcome to this challenge, SCRM x Alejandro Palomes.
						</Text>
						<Text>
							The main idea was to develop a Button and an Alert components, both compatible with React and React Native. Here's an example of how the components look inside a React Native app:
						</Text>
					</View>
        </Section>
				<View>
					<Button label="Press me!" onClick={() => console.log('Button pressedc')}/>
				</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
