/* TODO:
*  Touch book icon shows book about
*  code cleanup
*    separate components into files, one for each screen
*    separate screen components to use better parent/child prop passing, so you can reuse components
*  deep linking verses
* */

import React from 'react';
import { StatusBar, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PoemsScreen from './screens/PoemsScreen';
import VersesScreen from './screens/VersesScreen';
import MathScreens from './screens/MathScreens';
import TimelineGradeSelectionScreen from './screens/TimelineGradeSelectionScreen';
import { styles } from './styles/styles';
import TimelineForGradeScreen from './screens/TimelineForGradeScreen';

const TimelineStack = StackNavigator(
  {
    TimelineGradeSelectionScreen: {
      screen: TimelineGradeSelectionScreen,
    },
    TimelineGradeScreen: {
      screen: TimelineForGradeScreen,
    },
  },
  {
    initialRouteName: 'TimelineGradeSelectionScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2DC76D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

/* eslint new-cap: "off" */
const MyApp = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Verses: {
      screen: VersesScreen,
    },
    MathFacts: {
      screen: MathScreens,
      navigationOptions: {
        tabBarLabel: 'Math',
        tabBarIcon: () => <Icon name="add" color="#5A95FF" size={20} />,
      },
    },
    Timeline: {
      screen: TimelineStack,
      navigationOptions: {
        tabBarLabel: 'Timelines',
        tabBarIcon: () => <Icon name="history" color="#2DC76D" size={20} />,
      },
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
