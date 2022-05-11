import React from 'react';
import LoginScreen from './src/screens/auth/LoginScreen';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'purple',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
};

export default App;
AppRegistry.registerComponent(appName, () => App);
