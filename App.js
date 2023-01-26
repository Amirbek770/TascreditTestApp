
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import DetailScreen from './src/Screens/DetailScreen';
import HomeScreen from './src/Screens/HomeScreen';
import { store } from './store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: "Tascredit"
        }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          title: "Tascredit"
        }}  name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
