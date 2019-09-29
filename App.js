import React from 'react';
import { StatusBar, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { styles } from './styles/styles';
import NavigationService from './Navigation';

import HomeScreen from './screens/HomeScreen';
import VersesScreen from './screens/VersesScreen';
import TimelineGradeSelectionScreen from './screens/TimelineGradeSelectionScreen';
import TimelineForGradeScreen from './screens/TimelineForGradeScreen';

import PoemScreen from './screens/PoemScreen';
import PoemGradeSelectionScreen from './screens/PoemGradeSelectionScreen';
import PoemSelectionScreen from './screens/PoemSelectionScreen';

import MathPracticeScreen from './screens/MathPracticeScreen';
import MathQuizScreen from './screens/MathQuizScreen';

import SpellingGradeSelectionScreen from './screens/SpellingGradeSelectionScreen';
import SpellingForGradeScreen from './screens/SpellingForGradeScreen';
import SpellingScreen from './screens/SpellingScreen';

const TimelineStack = createStackNavigator(
  {
    TimelineGradeSelectionScreen,
    TimelineGradeScreen: {
      screen: TimelineForGradeScreen,
    },
  },
  {
    initialRouteName: 'TimelineGradeSelectionScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2DC76D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const PoemStack = createStackNavigator(
  {
    PoemGradeSelectionScreen,
    PoemSelectionScreen,
    PoemScreen,
  },
  {
    initialRouteName: 'PoemGradeSelectionScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#4A4A4A',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginHorizontal: 10,
      },
    },
  },
);

const MathStack = createStackNavigator(
  {
    MathPracticeScreen: {
      screen: MathPracticeScreen,
    },
    MathQuizScreen: {
      screen: MathQuizScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'MathPracticeScreen',
    defaultNavigationOptions: {
      headerVisible: false,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#4A4A4A',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginHorizontal: 10,
      },
    },
  },
);

const SpellingStack = createStackNavigator(
  {
    SpellingGradeSelectionScreen,
    SpellingForGradeScreen,
    SpellingScreen,
  },
  {
    initialRouteName: 'SpellingGradeSelectionScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#a9233e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

/* eslint new-cap: "off" */
const MyApp = createBottomTabNavigator(
  {
    Verses: {
      screen: VersesScreen,
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
    MathFacts: {
      screen: MathStack,
      navigationOptions: {
        tabBarLabel: 'Math Facts',
        tabBarIcon: () => <Icon name="add" color="#2089dc" size={24} />,
      },
    },
    Timeline: {
      screen: TimelineStack,
      navigationOptions: {
        tabBarLabel: 'Timelines',
        tabBarIcon: () => <Icon name="history" color="#2DC76D" size={20} />,
      },
    },
    Spelling: {
      screen: SpellingStack,
      navigationOptions: {
        tabBarLabel: 'Spelling',
        tabBarIcon: () => <Icon name="spellcheck" color="#a9233e" size={20} />,
      },
    },
    About: {
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
      activeTintColor: 'firebrick',
      inactiveTintColor: '#1c5fa0',
      indicatorStyle: {
        backgroundColor: 'firebrick',
      },
      showIcon: true,
    },
    tabBarPosition: 'bottom',
  },
);

const AppContainer = createAppContainer(MyApp);

const App = () => (
  <View style={styles.container}>
    <View>
      <StatusBar hidden backgroundColor="transparent" translucent />
    </View>
    <AppContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </View>
);

export default App;
