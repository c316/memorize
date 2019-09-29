import React from 'react';
import { ListItem } from 'react-native-elements';
import NavigationService from '../Navigation';
import constants from '../constants';

export default (props) => {
  const grades = [
    {
      name: 'Kindergarten',
      grade: 0,
    },
    {
      name: 'First',
      icon: 'numeric-1-box',
      type: 'material-community',
      grade: 1,
    },
    {
      name: 'Second',
      icon: 'numeric-2-box',
      type: 'material-community',
      grade: 2,
    },
    {
      name: 'Third',
      icon: 'numeric-3-box',
      type: 'material-community',
      grade: 3,
    },
    {
      name: 'Fourth',
      icon: 'numeric-4-box',
      type: 'material-community',
      grade: 4,
    },
    {
      name: 'Fifth',
      icon: 'numeric-5-box',
      type: 'material-community',
      grade: 5,
    },
    {
      name: 'Sixth',
      icon: 'numeric-6-box',
      type: 'material-community',
      grade: 6,
    },
    {
      name: 'Seventh',
      icon: 'numeric-7-box',
      type: 'material-community',
      grade: 7,
    },
    {
      name: 'Eighth',
      icon: 'numeric-8-box',
      type: 'material-community',
      grade: 8,
    },
  ];

  const { screenName, showGrades, textColor } = props;
  return grades
    .filter((item) => {
      if (showGrades && showGrades.length) {
        if (showGrades.includes(item.name.toLowerCase())) {
          return item;
        }
        return null;
      }
      return item;
    })
    .map((l, i) => (
      <ListItem
        key={i.toString()}
        titleStyle={{
          color: constants.colors.red,
        }}
        title={l.name}
        leftIcon={{
          name: l.icon ? l.icon : null,
          type: l.type ? l.type : null,
          color: textColor,
        }}
        onPress={() => {
          NavigationService.navigate(screenName, {
            grade: l.grade,
          });
        }}
        chevronColor={textColor}
        chevron
      />
    ));
};
