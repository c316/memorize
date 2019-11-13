import React from 'react';
import { ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class PoemGradeSelectionScreen extends React.Component {
  static navigationOptions = ({ navigationOptions }) => ({
    title: 'Grades',
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  });

  _showPoemsForGrade(grade) {
    this.props.navigation.navigate('PoemSelectionScreen', {
      grade,
    });
  }

  render() {
    const grades = [
      {
        name: 'Kindergarten',
        grade: 0,
        icon: 'alpha-k-box',
        type: 'material-community',
      },
      {
        name: 'First Grade',
        icon: 'numeric-1-box',
        type: 'material-community',
        grade: 1,
      },
      {
        name: 'Second Grade',
        icon: 'numeric-2-box',
        type: 'material-community',
        grade: 2,
      },
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
      {
        name: 'Seventh Grade',
        icon: 'numeric-7-box',
        type: 'material-community',
        grade: 7,
      },
      {
        name: 'Eighth Grade',
        icon: 'numeric-8-box',
        type: 'material-community',
        grade: 8,
      },
    ];

    return (
      <ImageBackground
        source={require('../assets/images/circles.png')}
        style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
        imageStyle={{ opacity: 0.1 }}
      >
        {grades.map((l, i) => (
          <ListItem
            key={i.toString()}
            titleStyle={{
              color: '#25265E',
            }}
            title={l.name}
            leftIcon={{
              name: l.icon ? l.icon : null,
              type: l.type ? l.type : null,
              color: '#2DC76D',
            }}
            onPress={() => {
              this._showPoemsForGrade(l.grade);
            }}
            chevronColor="#2DC76D"
            chevron
          />
        ))}
      </ImageBackground>
    );
  }
}
