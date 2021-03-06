import React from 'react';
import HomePage from './components/HomePage';
import Habits from './components/Habits';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="Habits"
          component={Habits} />
      </Stack.Navigator>
    </NavigationContainer>

  )
};

export default App;