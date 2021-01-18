import React from 'react';
import { Feather } from '@expo/vector-icons';
import Home from '../components/Home';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: () => <Feather name="info" color="#787993" size={24} />,
  };

  render() {
    return <Home />;
  }
}
