/** @format */
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import LoginInfo from './src/components/LoginInfo';

const App = () => {
  return (
    <View>
      <Header headerText={'Authentication'} />
      <LoginInfo />
    </View>
  );
};


AppRegistry.registerComponent('Auth', () => App);
