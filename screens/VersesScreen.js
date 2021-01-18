import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Verses from '../components/Verses';

export default class VersesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Verses',
    tabBarIcon: () => <FontAwesome5 name="book" color="#7540EE" size={20} />,
  };

  render() {
    return <Verses />;
  }
}
