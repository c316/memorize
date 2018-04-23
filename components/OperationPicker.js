import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
  pickerCard: {
    minHeight: 175,
    justifyContent: 'center',
    backgroundColor: '#1c5fa0',
    borderColor: 'transparent',
    margin: 20,
    padding: 0,
    borderWidth: 0,
    borderRadius: 5,
    elevation: 8,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
  },
  textCenter: {
    textAlign: 'center',
    color: 'white',
  },
});

class OperationPicker extends React.Component {
  _goToPage = (name) => {
    this.props.navigation.navigate('NumberGrid', {
      mathCategory: name,
    });
  };

  render() {
    const list = [
      {
        title: 'Addition',
        icon: 'plus',
        type: 'font-awesome',
      },
      {
        title: 'Multiplication',
        icon: 'times',
        type: 'font-awesome',
      },
    ];
    return (
      <View>
        {list.map(item => (
          <TouchableOpacity
            key={item.title}
            style={styles.pickerCard}
            onPress={() => this._goToPage(item.title)}
          >
            <Text h2 style={styles.textCenter}>
              {item.title}
            </Text>
            <Text h1 style={styles.textCenter}>
              {item.title === 'Addition' ? '+' : null}
              {item.title === 'Subtraction' ? '-' : null}
              {item.title === 'Multiplication' ? 'x' : null}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

OperationPicker.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OperationPicker;
