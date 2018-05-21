/* TODO:
*  Touch book icon shows book about
*  code cleanup
*    separate components into files, one for each screen
*    separate screen components to use better parent/child prop passing, so you can reuse components
*  deep linking verses
* */

import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { Font } from 'expo';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PoemsScreen from './screens/PoemsScreen';
import VersesScreen from './screens/VersesScreen';
import MathScreens from './screens/MathScreens';
// import History from './screens/History';
import { styles } from './styles/styles';

/* eslint new-cap: "off" */
const MyApp = TabNavigator(
  {
    /* Historys: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <Text
            style={{ fontFamily: 'icomoon', fontSize: 16, color: tintColor }}
          >
            &#xe901;
          </Text>
        ),
      },
    }, */
    Verses: {
      screen: VersesScreen,
    },
    Poems: {
      screen: PoemsScreen,
    },
    MathFacts: {
      screen: MathScreens,
      navigationOptions: {
        tabBarLabel: 'Math',
        tabBarIcon: ({ tintColor }) => (
          <Text
            style={{ fontFamily: 'icomoon', fontSize: 16, color: tintColor }}
          >
            &#xe900;
          </Text>
        ),
      },
    },
    Home: {
      screen: HomeScreen,
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
      labelStyle: {
        fontSize: Platform.OS === 'ios' ? 12 : 9,
      },
      activeTintColor: 'firebrick',
      inactiveTintColor: '#1c5fa0',
      indicatorStyle: {
        backgroundColor: 'firebrick',
      },
      showIcon: true,
      showLabel: true,
    },
  }
);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      icomoon: require('./assets/fonts/icomoon.ttf'),
    });
    await Font.loadAsync({
      'sf-pro-display': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    });
    await Font.loadAsync({
      'sf-pro-text': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? (
      <View style={styles.container}>
        <StatusBar hidden backgroundColor="transparent" translucent />
        <MyApp />
      </View>
    ) : null;
  }
}
