import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Poems from '../components/Poems';

export default class PoemsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Poems',
    tabBarIcon: ({ tintColor }) => (
      <Text style={{ fontFamily: 'icomoon', fontSize: 16, color: tintColor }}>
        &#xe904;
      </Text>
    ),
  };

  render() {
    return (
      <SafeAreaView>
        <Poems />
      </SafeAreaView>
    );
  }
}
