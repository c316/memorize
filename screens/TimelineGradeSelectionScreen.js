import React from 'react';
import { ImageBackground, Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class TimelineGradeSelectionScreen extends React.Component {
  static navigationOptions = ({ navigationOptions }) => ({
    title: 'Select a Grade',
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  });
  _showTimelinesForGrade(grade, type) {
    this.props.navigation.navigate('TimelineGradeScreen', {
      grade,
      type,
    });
  }

  render() {
    const grades = [
      {
        name: 'Third Grade',
        icon: 'numeric-3-box',
        type: 'material-community',
        grade: 3,
      },
      {
        name: 'Fourth Grade',
        icon: 'numeric-4-box',
        type: 'material-community',
        grade: 4,
      },
      {
        name: 'Fifth Grade Bible',
        icon: 'book',
        type: 'material-community',
        grade: 5,
        timelineType: 'bible',
      },
      {
        name: 'Fifth Grade History',
        icon: 'history',
        type: 'material-community',
        grade: 5,
        timelineType: 'history',
      },
      {
        name: 'Sixth Grade Bible',
        icon: 'book',
        type: 'material-community',
        grade: 6,
        timelineType: 'bible',
      },
      {
        name: 'Sixth Grade History',
        icon: 'history',
        type: 'material-community',
        grade: 6,
        timelineType: 'history',
      },
    ];

    return (
      <ImageBackground
        source={require('../assets/images/circles.png')}
        style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
        imageStyle={{ opacity: 0.1 }}
      >
        <List
          style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }}
          containerStyle={{ marginTop: 0 }}
        >
          {grades.map((l, i) => (
            <ListItem
              titleStyle={{
                color: '#25265E',
              }}
              chevronColor="#2DC76D"
              key={i}
              title={l.name}
              leftIcon={{
                name: l.icon ? l.icon : null,
                type: l.type ? l.type : null,
                color: '#2DC76D',
              }}
              onPress={() => {
                this._showTimelinesForGrade(l.grade, l.timelineType);
              }}
            />
          ))}
        </List>
      </ImageBackground>
    );
  }
}
