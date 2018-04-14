/* TODO:
*  Touch book icon shows book about
*  code cleanup
*    separate components into files, one for each screen
*    separate screen components to use better parent/child prop passing, so you can reuse components
*  deep linking verses
*  setup the loading screen (if needed, this might be done from xcode and android studio)
*  test on other devices
* */

import React from 'react';
import { Button, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator, SafeAreaView } from 'react-navigation';
import Home from './Home';
import Poems from './Poems';
import Verses from './Verses';
import MathScreens from './screens/MathScreens';
import { styles } from './styles/styles';

class HomeScreen extends React.Component {
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

class PoemsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Poems',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="create" color={tintColor} size={24} />
    ),
  };

  render() {
    return (
      <SafeAreaView>
        <Poems />
      </SafeAreaView>
    );
  }
}

class VersesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Verses',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="book" color={tintColor} size={20} />
    ),
  };

  render() {
    return <Verses />;
  }
}

const MyApp = TabNavigator(
  {
    Verses: {
      screen: VersesScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Poems: {
      screen: PoemsScreen,
    },
    MathFacts: {
      screen: MathScreens,
      navigationOptions: {
        tabBarLabel: 'Math',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="add" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingBottom: 2,
        backgroundColor: '#FFF',
      },
      tabStyle: {
        backgroundColor: '#FDFEFE',
      },
      activeTintColor: 'firebrick',
      inactiveTintColor: '#074e86',
      indicatorStyle: {
        backgroundColor: 'firebrick',
      },
      showIcon: true,
    },
  }
);

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <StatusBar hidden backgroundColor={'transparent'} translucent />
      </View>
      <MyApp />
    </View>
  );
};

export default App;
