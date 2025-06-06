
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import MonitorScreen from './screens/MonitorScreen';
import AlertScreen from './screens/AlertScreen';
import ControlScreen from './screens/ControlScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Monitoramento" component={MonitorScreen} />
        <Stack.Screen name="Alertas" component={AlertScreen} />
        <Stack.Screen name="Ação e Controle" component={ControlScreen} />
        <Stack.Screen name="Histórico" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
