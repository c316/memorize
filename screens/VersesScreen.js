import React from 'react';
import { Text } from 'react-native';
import Verses from '../components/Verses';

export default class VersesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Verses',
    tabBarIcon: ({ tintColor }) => (
      <Text style={{ fontFamily: 'icomoon', fontSize: 16, color: tintColor }}>
        &#xe902;
      </Text>
    ),
  };

  render() {
    return <Verses />;
  }
}
