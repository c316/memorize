import React from 'react';
import { SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import Poems from '../components/Poems';

export default class PoemsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Poems',
    tabBarIcon: () => (
      <Icon name="create" color="rgba(0, 0, 0, 0.5)" size={24} />
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
