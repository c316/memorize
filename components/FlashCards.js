import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  titleText: {
    margin: 20,
    fontWeight: '200',
  },
  problemCardContainer: {
    justifyContent: 'center',
    minHeight: '50%',
  },
  problemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tallContainer: {
    height: '60%',
    justifyContent: 'center',
  },
  addSomeMargin: {
    margin: 10,
  },
  alignTextRight: {
    textAlign: 'right',
  },
  blueColorText: {
    color: '#1c5fa0',
  },
});

class FlashCards extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {
      params: { mathCategory, selectedLevel },
    } = navigation.state;

    return {
      title: `${mathCategory} level ${selectedLevel}`,
    };
  };
  constructor(props) {
    super(props);
    const { mathCategory, selectedLevel } = this.props.navigation.state.params;

    const operation = () => {
      if (mathCategory === 'Addition') return '+';
      if (mathCategory === 'Subtraction') return '-';
      if (mathCategory === 'Multiplication') return 'x';
      return null;
    };

    this.state = {
      showAnswer: false,
      answer: '',
      numerator: '',
      denomenator: '',
      operation: operation(),
      mathCategory,
      selectedLevel,
    };
  }

  componentWillMount() {
    this.generateNewProblem();
  }

  generateNewProblem() {
    const randomBool = Math.random() >= 0.5;

    let numerator = 0;
    let denomenator = 0;

    if (randomBool) {
      numerator = Math.floor(Math.random() * (this.state.selectedLevel + 1));
      denomenator = Math.floor(Math.random() * 13);
    } else {
      numerator = Math.floor(Math.random() * 13);
      denomenator = Math.floor(Math.random() * (this.state.selectedLevel + 1));
    }

    const answer = () => {
      if (this.state.mathCategory === 'Addition') {
        return numerator + denomenator;
      }
      if (this.state.mathCategory === 'Subtraction') {
        return numerator - denomenator;
      }
      if (this.state.mathCategory === 'Multiplication') {
        return numerator * denomenator;
      }
      return null;
    };

    this.setState({
      answer: answer(),
      numerator,
      denomenator,
    });
  }

  showAnswerOrGetNextProblem() {
    const { showAnswer } = this.state;
    this.setState({ showAnswer: !showAnswer });
    if (showAnswer) {
      this.generateNewProblem();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.problemCardContainer}
          onPress={() => this.showAnswerOrGetNextProblem()}
        >
          <View style={styles.problemContainer}>
            <View>
              <Text h1 style={[styles.alignTextRight, styles.blueColorText]}>
                {this.state.numerator}
              </Text>
              <Text
                style={[
                  { textDecorationLine: 'underline' },
                  styles.alignTextRight,
                ]}
                h1
              >
                <Text style={[styles.alignTextRight, styles.blueColorText]}>
                  {this.state.operation} {this.state.denomenator}
                </Text>
              </Text>
              <Text h1 style={[styles.alignTextRight, styles.blueColorText]}>
                &nbsp;{this.state.showAnswer ? this.state.answer : null}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.addSomeMargin}>
          <Divider
            style={{
              backgroundColor: 'grey',
              marginBottom: 10,
            }}
          />
          <Text h4 style={styles.titleText}>
            Touch anywhere above the line to see the solution, touch again to go
            to the next problem.
          </Text>
        </View>
      </View>
    );
  }
}

FlashCards.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        mathCategory: PropTypes.string,
        selectedLevel: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default FlashCards;
