import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header/Header';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'IdeaBox'} />
  </View>
);

AppRegistry.registerComponent('ideabox_native', () => App);
