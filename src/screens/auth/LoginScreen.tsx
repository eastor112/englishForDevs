import * as React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Appbar} from 'react-native-paper';

const LoginScreen = () => {
  const _goBack = () => console.debug('Went back');

  const _handleSearch = () => console.debug('Searching');

  const _handleMore = () => console.debug('Shown more');
  return (
    <View>
      <Appbar style={styles.bottom}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Lessons" subtitle="Start your learning" />
        <Appbar.Header>
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </Appbar>
      <Button title="Login" onPress={_handleSearch} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottom: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
});
