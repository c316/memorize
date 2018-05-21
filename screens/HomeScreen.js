import React from 'react';
import { Text } from 'react-native';
import Home from '../components/Home';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Text style={{ fontFamily: 'icomoon', fontSize: 16, color: tintColor }}>
        &#xe903;
      </Text>
    ),
  };

  render() {
    return <Home />;
  }
}
