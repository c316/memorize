import React from 'react';
import { Icon } from 'react-native-elements';
import Verses from '../components/Verses';

export default class VersesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Verses',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="book" color={tintColor} size={20} />
    ),
  };

  render() {
    return <Verses />;
  }
}
