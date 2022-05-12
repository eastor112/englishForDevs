import * as React from 'react';
import {View, Button} from 'react-native';
import {Appbar} from 'react-native-paper';
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
  const _goBack = () => console.debug('Went back');

  const _handleSearch = () => console.debug('Searching');

  const _handleMore = () => console.debug('Shown more');
  return (
    <View>
      <Appbar dark>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Header>
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </Appbar>

      <Button title="Login" onPress={_handleSearch} />
      <SignupScreen />
    </View>
  );
};

export default LoginScreen;
