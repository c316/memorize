import React from 'react';
import { Icon } from 'react-native-elements';
import Poems from '../components/Poems';

export default class PoemsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    tabBarLabel: 'Poems',
    tabBarIcon: () => (
      <Icon name="create" color="rgba(0, 0, 0, 0.5)" size={24} />
    ),
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2DC76D',
      },
    },
  });

  render() {
    return <Poems />;
  }
}
