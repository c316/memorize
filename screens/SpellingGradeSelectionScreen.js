import React from 'react';
import GradeSelector from '../components/GradeSelector';
import BackgroundImage from '../components/BackgroundImage';
import constants from '../constants';

export default class SpellingGradeSelectionScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Select a Grade',
  });

  render() {
    return (
      <BackgroundImage>
        <GradeSelector
          screenName="SpellingForGradeScreen"
          showGrades={['first', 'second']}
          textColor={constants.colors.red}
        />
      </BackgroundImage>
    );
  }
}
