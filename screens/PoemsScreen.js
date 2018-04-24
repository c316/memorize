import React from 'react';
import { SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import Poems from '../components/Poems';

export default class PoemsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Poems',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="create" color={tintColor} size={18} />
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
