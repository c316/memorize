import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Divider, Text, ButtonGroup, Button } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  problemCardContainer: {
    justifyContent: 'center',
  },
  problemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tallContainer: {
    justifyContent: 'center',
  },
  addSomeMargin: {
    margin: 10,
  },
  alignTextRight: {
    textAlign: 'right',
  },
  blueColorText: {
    color: '#25265E',
  },
  largeNumbers: {
    fontSize: 60,
  },
  instructions: {
    backgroundColor: '#D8D8D8',
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});

class MathPracticeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Math',
    tabBarIcon: () => <FontAwesome5 name="plus" color="#5A95FF" size={20} />,
  };
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
      answer: '',
      numerator: '',
      denomenator: '',
      operation: '+',
      mathCategory: 'Addition',
      selectedLevel: 3,
      selectedNumberIndex: 0,
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

  _updateOperation(index) {
    this.setState(
      {
        mathCategory: index === 0 ? 'Addition' : 'Multiplication',
        operation: index === 0 ? '+' : 'x',
      },
      () => this.generateNewProblem()
    );
  }

  _updateLevel(index) {
    this.setState(
      {
        selectedLevel: index + 3,
        selectedNumberIndex: index,
      },
      () => this.generateNewProblem()
    );
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/circlesForMath.png')}
        style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
        imageStyle={{ opacity: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.instructions}>
            <Text style={{ fontSize: 16, lineHeight: 20 }}>
              Touch the problem to reveal the answer. Touch again to go to the
              next problem.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.problemCardContainer}
            onPress={() => this.showAnswerOrGetNextProblem()}
          >
            <View style={styles.problemContainer}>
              <View>
                <Text
                  style={[
                    styles.largeNumbers,
                    styles.alignTextRight,
                    styles.blueColorText,
                  ]}
                >
                  {this.state.numerator}
                </Text>
                <Text
                  style={[
                    { textDecorationLine: 'underline' },
                    styles.alignTextRight,
                  ]}
                >
                  <Text
                    style={[
                      styles.largeNumbers,
                      styles.alignTextRight,
                      styles.blueColorText,
                    ]}
                  >
                    {this.state.operation} {this.state.denomenator}
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.largeNumbers,
                    styles.alignTextRight,
                    styles.blueColorText,
                  ]}
                >
                  &nbsp;{this.state.showAnswer ? this.state.answer : null}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.addSomeMargin, styles.selectors]}>
            <Divider
              style={{
                backgroundColor: '#5A95FF',
                marginBottom: 10,
              }}
            />
            <ButtonGroup
              containerStyle={{ marginBottom: 30 }}
              onPress={(index) => this._updateLevel(index)}
              buttons={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              selectedTextStyle={{ color: 'white' }}
              selectedButtonStyle={{
                backgroundColor: '#5A95FF',
              }}
              buttonStyle={{ backgroundColor: 'white' }}
              selectedIndex={this.state.selectedNumberIndex}
            />
            <ButtonGroup
              onPress={(index) => this._updateOperation(index)}
              buttons={['Addition', 'Multiplication']}
              selectedTextStyle={{ color: 'white' }}
              containerStyle={{ borderRadius: 20, marginBottom: 30 }}
              selectedButtonStyle={{
                backgroundColor: '#5A95FF',
              }}
              buttonStyle={{ backgroundColor: 'white' }}
              selectedIndex={this.state.mathCategory === 'Addition' ? 0 : 1}
            />
            <Button
              color="white"
              rounded
              title="Go to Quiz"
              backgroundColor="#5A95FF"
              onPress={() =>
                this.props.navigation.navigate('MathQuizScreen', {
                  mathCategory: this.state.mathCategory,
                  selectedLevel: this.state.selectedLevel,
                })
              }
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default MathPracticeScreen;
