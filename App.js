/* TODO:
*  Touch book icon shows book about
*  code cleanup
*    separate components into files, one for each screen
*    separate screen components to use better parent/child prop passing, so you can reuse components
*  deep linking verses
* */

import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PoemsScreen from './screens/PoemsScreen';
import VersesScreen from './screens/VersesScreen';
import MathScreens from './screens/MathScreens';
import { styles } from './styles/styles';

import History from './components/History';

/* eslint new-cap: "off" */
const MyApp = TabNavigator(
  {
    Historys: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="history" color={tintColor} size={18} />
        ),
      },
    },
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
          <Icon name="add" color={tintColor} size={18} />
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
    },
  }
);

const App = () => (
  <View style={styles.container}>
    <View>
      <StatusBar hidden backgroundColor="transparent" translucent />
    </View>
    <MyApp />
  </View>
);

export default App;
