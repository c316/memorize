import React from 'react';
import { View, Button, Text, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MathFacts from '../components/MathFacts';
import { styles } from '../styles/styles';

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

const Addition = () => (
  <View>
    <Text>Addition</Text>
  </View>
);
const Subtraction = () => (
  <View>
    <Text>Subtraction</Text>
  </View>
);
const Multiplication = () => (
  <View>
    <Text>Multiplication</Text>
  </View>
);
const Division = () => (
  <View>
    <Text>Division</Text>
  </View>
);

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
