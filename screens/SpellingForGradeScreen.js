import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import constants from '../constants';
import { first, second, third, fourth, fifth } from '../assets/spelling';

export default class SpellingForGradeScreen extends React.Component {
  static navigationOptions = (screenProps) => ({
    title: `Grade: ${screenProps.navigation.state.params.grade}`,
  });

  render() {
    const { navigation } = this.props;
    const grade = navigation.getParam('grade');
    let spellingList = first;
    if (grade === 2) {
      spellingList = second;
    }
    if (grade === 3) {
      spellingList = third;
    }
    if (grade === 4) {
      spellingList = fourth;
    }
    if (grade === 5) {
      spellingList = fifth;
    }
    return (
      <ScrollView>
        {spellingList.map((l, i) => (
          <ListItem
            key={i.toString()}
            titleStyle={{
              color: constants.colors.red,
            }}
            title={`List: ${i + 1}`}
            onPress={() => {
              navigation.navigate('SpellingScreen', {
                spellingList: l,
                listNumber: i + 1,
              });
            }}
            chevronColor={constants.colors.red}
            chevron
          />
        ))}
      </ScrollView>
    );
  }
}

SpellingForGradeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
