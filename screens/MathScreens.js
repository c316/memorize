import React from 'react';
import { View, Button, Text, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MathFacts from '../components/MathFacts';
import { styles } from '../styles/styles';
import Addition from '../components/Addition';
import Subtraction from '../components/Subtraction';
import Multiplication from '../components/Multiplication';
import Division from '../components/Division';

class MathFactsScreen extends React.Component {
  static navigationOptions = {
    title: 'Math',
  };

  render() {
    return (
      <View style={styles.container}>
        <MathFacts navigation={this.props.navigation} />
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other',
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const MathScreens = StackNavigator({
  MathFacts: { screen: MathFactsScreen },
  Addition: {
    navigationOptions: {
      title: 'Addition',
    },
    screen: Addition,
  },
  Subtraction: {
    navigationOptions: {
      title: 'Subtraction',
    },
    screen: Subtraction,
  },
  Multiplication: {
    navigationOptions: {
      title: 'Multiplication',
    },
    screen: Multiplication,
  },
  Division: {
    navigationOptions: {
      title: 'Division',
    },
    screen: Division,
  },
});

export default MathScreens;
