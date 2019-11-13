import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import constants from '../constants';
import PrintMe from '../components/PrintMe';

class SpellingScreen extends React.Component {
  static navigationOptions = (screenProps) => ({
    title: `List: ${screenProps.navigation.state.params.listNumber}`,
  });

  render() {
    const { navigation } = this.props;
    const spellingList = navigation.getParam('spellingList');
    let contentToPrint = '';

    spellingList.forEach((word, i) => {
      contentToPrint = contentToPrint.concat(`<div>${i + 1}. ${word}</div>`);
    });
    return (
      <>
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
        <PrintMe
          title={`List ${navigation.getParam('listNumber')}`}
          content={contentToPrint}
          centered={false}
          large={false}
        />
      </>
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
