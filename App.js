import React from 'react';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { StatusBar, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import * as Segment from 'expo-analytics-segment';
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

Segment.setEnabledAsync(false);

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
  }
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
  }
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
  }
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
  }
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
          <Icon
            type="font-awesome-5"
            name="pencil-alt"
            color="rgba(0, 0, 0, 0.5)"
            size={24}
          />
        ),
      },
    },
    MathFacts: {
      screen: MathStack,
      navigationOptions: {
        tabBarLabel: 'Math Facts',
        tabBarIcon: () => (
          <Icon type="font-awesome-5" name="plus" color="#2089dc" size={24} />
        ),
      },
    },
    Timeline: {
      screen: TimelineStack,
      navigationOptions: {
        tabBarLabel: 'Timelines',
        tabBarIcon: () => (
          <Icon
            type="font-awesome-5"
            name="history"
            color="#2DC76D"
            size={20}
          />
        ),
      },
    },
    Spelling: {
      screen: SpellingStack,
      navigationOptions: {
        tabBarLabel: 'Spelling',
        tabBarIcon: () => (
          <Icon
            type="font-awesome-5"
            name="spell-check"
            color="#a9233e"
            size={20}
          />
        ),
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
  }
);

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}
const App = createAppContainer(MyApp);

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([FontAwesome5.font, Feather.font]);

    await Promise.all([...fontAssets]);
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={styles.container}>
        <View>
          <StatusBar hidden backgroundColor="transparent" translucent />
        </View>
        <App
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}
