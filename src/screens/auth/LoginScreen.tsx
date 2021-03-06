import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('MainMenu');
        }}>
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;
