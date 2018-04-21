import React from 'react';
import { Icon } from 'react-native-elements';
import Home from '../components/Home';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" color={tintColor} size={24} />
    ),
  };

  render() {
    return <Home />;
  }
}
