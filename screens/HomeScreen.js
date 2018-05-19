import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Home from '../components/Home';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
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
