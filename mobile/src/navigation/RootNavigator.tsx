
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AssignedTripsScreen from '../screens/AssignedTripsScreen';
import TripDetailsScreen from '../screens/TripDetailsScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="AssignedTrips"
        component={AssignedTripsScreen}
      />

      <Stack.Screen
        name="TripDetails"
        component={TripDetailsScreen}
      />
    </Stack.Navigator>
  );
}
