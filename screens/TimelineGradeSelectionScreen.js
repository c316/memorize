import React from 'react';
import { Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class TimelineGradeSelectionScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Select a Grade',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  _showTimelinesForGrade(grade) {
    this.props.navigation.navigate('TimelineGradeScreen', {
      grade,
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
        name: 'Fifth Grade',
        icon: 'numeric-5-box',
        type: 'material-community',
        grade: 5,
      },
      {
        name: 'Sixth Grade',
        icon: 'numeric-6-box',
        type: 'material-community',
        grade: 6,
      },
    ];

    return (
      <List
        style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }}
        containerStyle={{ marginTop: 0 }}
      >
        {grades.map((l, i) => (
          <ListItem
            titleStyle={{
              color: 'rgba(0,0,0,.87)',
            }}
            chevronColor="#074e86"
            key={i}
            title={l.name}
            leftIcon={{
              name: l.icon ? l.icon : null,
              type: l.type ? l.type : null,
              color: '#074e86',
            }}
            onPress={() => {
              this._showTimelinesForGrade(l.grade);
            }}
          />
        ))}
      </List>
    );
  }
}
