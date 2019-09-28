import React from 'react';
import { ListItem } from 'react-native-elements';

export default (props) => {
  const grades = [
    {
      name: 'Kindergarten',
      grade: 0,
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

  const { showGrades, textColor } = props;
  return grades
    .filter((item) => {
      if (showGrades && showGrades.length) {
        if (showGrades.includes(item.grade)) {
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
          color: '#25265E',
        }}
        title={l.name}
        leftIcon={{
          name: l.icon ? l.icon : null,
          type: l.type ? l.type : null,
          color: textColor,
        }}
        onPress={() => {
          this._showPoemsForGrade(l.grade);
        }}
        chevronColor={textColor}
        chevron
      />
    ));
};