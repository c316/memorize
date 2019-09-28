import React from 'react';
import GradeSelector from '../components/GradeSelector';
import BackgroundImage from '../components/BackgroundImage';

export default class SpellingGradeSelectionScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Select a Grade',
  });

  render() {
    return (
      <BackgroundImage>
        <GradeSelector textColor="#a9233e" showGrades={[1, 2, 3, 4]} />
      </BackgroundImage>
    );
  }
}
