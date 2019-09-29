import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class SpellingForGradeScreen extends React.Component {
  static navigationOptions = (screenProps) => ({
    title: `Grade: ${screenProps.navigation.state.params.grade}`,
  });

  render() {
    const { navigation } = this.props;
    const grade = navigation.getParam('grade');

    return (
      <View>
        {/* TODO:
          1. list number
          2. Item number
          3. Spelling word
          4. Line sepearator
        */}
        <Text>{grade}</Text>
      </View>
    );
  }
}

SpellingForGradeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
