/* TODO:
*  Touch book icon shows book about
*  Add poetry back in
*  code cleanup
*    separate components into files, one for each screen
*    separate screen components to use better parent/child prop passing, so you can reuse components
*  deep linking verses
*  use the CPLS app icon
*  setup the loading screen (if needed, this might be done from xcode and android studio)
*  add the footer component to the main screen (Made with ♥ by JoshJoe)
*  add the verse credits to the verses screen (ESV 2001 by Crossway Bibles, a division of Good News Publishers)
*  test on other devices
* */

import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import Home from './Home';
import Poems from './Poems';
import Verses from './Verses';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" color={tintColor} size={24}  />
    ),
  };

  render() {
    return (
      <Home/>
    );
  }
}

class PoemsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Poems',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="create" color={tintColor} size={24}  />
    ),
  };

  render() {
    return (
      <Poems/>
    );
  }
}

class VersesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Verses',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="book" color={tintColor} size={24} />
    ),
  };

  render() {
    return (
      <Verses/>
    );
  }
}

const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Verses: {
    screen: VersesScreen,
  },
  Poems: {
    screen: PoemsScreen,
  },
}, {
  tabBarOptions: {
    style: {
      paddingBottom: 2,
      marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      backgroundColor: '#E5E7E9',
    },
    tabStyle: {
      backgroundColor: '#FDFEFE',
    },
    activeTintColor: 'firebrick',
    inactiveTintColor: '#074e86',
    indicatorStyle: {
      backgroundColor: 'firebrick'
    },
    showIcon: true,
  },
});

export default MyApp;