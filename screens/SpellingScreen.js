import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import constants from '../constants';

const styles = StyleSheet.create({
  headerTitle: {
    alignItems: 'center',
    marginTop: 10,
  },
  headerUnderline: {
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    shadowOffset: { height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: 3,
  },
});

class SpellingScreen extends React.Component {
  static navigationOptions = (screenProps) => ({
    title: `List: ${screenProps.navigation.state.params.listNumber}`,
  });

  render() {
    const { navigation } = this.props;
    const spellingList = navigation.getParam('spellingList');
    return (
      <ScrollView>
        {spellingList.map((word, i) => (
          <ListItem
            key={i.toString()}
            titleStyle={{
              color: constants.colors.red,
            }}
            title={`${i + 1}. ${word}`}
            topDivider
          />
        ))}
      </ScrollView>
    );
  }
}

SpellingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default SpellingScreen;