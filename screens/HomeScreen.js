import React from 'react';
import { Icon } from 'react-native-elements';
import Home from '../components/Home';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: () => <Icon name="info-outline" color="#787993" size={24} />,
  };

  render() {
    return <Home />;
  }
}
