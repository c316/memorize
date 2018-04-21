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
import { StatusBar, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PoemsScreen from './screens/PoemsScreen';
import VersesScreen from './screens/VersesScreen';
import MathScreens from './screens/MathScreens';
import { styles } from './styles/styles';

/* eslint new-cap: "off" */
const MyApp = TabNavigator(
  {
    MathFacts: {
      screen: MathScreens,
      navigationOptions: {
        tabBarLabel: 'Math',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="add" color={tintColor} size={20} />
        ),
      },
    },
    Verses: {
      screen: VersesScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Poems: {
      screen: PoemsScreen,
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
