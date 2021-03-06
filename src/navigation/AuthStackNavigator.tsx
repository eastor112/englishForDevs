import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import MainDrawerNavigator from './MainDrawerNavigator';
import SignupScreen from '../screens/auth/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="MainMenu" component={MainDrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
