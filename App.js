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
import { styles } from './styles/styles';

import HomeScreen from './screens/HomeScreen';
import VersesScreen from './screens/VersesScreen';
import MathScreens from './screens/MathScreens';
import TimelineGradeSelectionScreen from './screens/TimelineGradeSelectionScreen';
import TimelineForGradeScreen from './screens/TimelineForGradeScreen';

import PoemScreen from './screens/PoemScreen';
import PoemGradeSelectionScreen from './screens/PoemGradeSelectionScreen';
import PoemSelectionScreen from './screens/PoemSelectionScreen';

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

const PoemStack = StackNavigator(
  {
    PoemGradeSelectionScreen: {
      screen: PoemGradeSelectionScreen,
    },
    PoemSelectionScreen: {
      screen: PoemSelectionScreen,
    },
    PoemScreen: {
      screen: PoemScreen,
    },
  },
  {
    initialRouteName: 'PoemGradeSelectionScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#4A4A4A',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

/* eslint new-cap: "off" */
const MyApp = TabNavigator(
  {
    Verses: {
      screen: VersesScreen,
    },
    Home: {
      screen: HomeScreen,
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
      screen: PoemStack,
      navigationOptions: {
        tabBarLabel: 'Poems',
        tabBarIcon: () => (
          <Icon name="create" color="rgba(0, 0, 0, 0.5)" size={24} />
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
