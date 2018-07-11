import React from 'react';
import { Icon } from 'react-native-elements';
import Home from '../components/Home';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon name="home" color="#D0021B" size={24} />,
  };

  render() {
    return <Home />;
  }
}
