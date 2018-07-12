import React from 'react';
import {
  Alert,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Platform
} from 'react-native';
import {
  Icon, Divider, Text, Button
} from 'react-native-elements';

import { moderateScale } from '../miscFunctions';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
    fontSize: moderateScale(60),
  },
  instructions: {
    backgroundColor: '#D8D8D8',
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  questionNumber: {
    fontSize: 20,
    fontWeight: '100',
  },
  divider: {
    fontSize: 30,
    fontWeight: '100',
    margin: 1,
    top: 2,
    right: 8,
  },
  totalQuestions: {
    fontSize: 20,
    fontWeight: '100',
    top: 25,
    right: 15,
  },
  specialContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialButtonContainer: {
    flex: 1,
  },
  specialTextContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
});

class MathPracticeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Math',
    tabBarIcon: () => <Icon name="add" color="#5A95FF" size={20} />,
  };

  constructor(props) {
    super(props);

    this.state = {
      questionNumber: 0,
      correct: 0,
      incorrect: 0,
      timeRemaining: 60,
      answer: '',
      correctAnswer: 0,
      numerator: '',
      denomenator: '',
      operation:
        props.navigation.state.params.mathCategory === 'Addition' ? '+' : 'x',
      mathCategory: props.navigation.state.params.mathCategory,
      selectedLevel: props.navigation.state.params.selectedLevel,
    };
  }

  componentWillMount() {
    this.generateNewProblem();
  }

  componentDidMount() {
    Alert.alert(
      'Start the Quiz?',
      `Selected Level: ${this.state.selectedLevel}
Selected Category: ${this.state.mathCategory}

      Enter an answer and touch Submit to go to the next problem. Touch Skip to skip this problem. Click the practice button to practice some more.`,
      [
        {
          text: 'Go Back',
          onPress: () => this.props.navigation.goBack(),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => this._getStarted() },
      ],
      { cancelable: false }
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }

  _getStarted() {
    this.answerInput.focus();
    this.setState(
      {
        questionNumber: 0,
        correct: 0,
        incorrect: 0,
        timeRemaining: 60,
        answer: '',
        correctAnswer: 0,
      },
      () => {
        this.generateNewProblem();
        this.intervalId = setInterval(() => {
          this.setState({ timeRemaining: this.state.timeRemaining - 1 });
        }, 1000);

        this.timeoutId = setTimeout(() => {
          this._completeQuiz();
        }, 61000);
      }
    );
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

    const correctAnswer = () => {
      if (this.state.mathCategory === 'Addition') {
        return numerator + denomenator;
      }
      if (this.state.mathCategory === 'Multiplication') {
        return numerator * denomenator;
      }
      return null;
    };

    this.setState({
      correctAnswer: correctAnswer(),
      numerator,
      denomenator,
      questionNumber: this.state.questionNumber + 1,
    });
  }

  _skipQuestion() {
    this.setState({ answer: null });

    if (this.state.questionNumber === 20) {
      this.setState(
        {
          incorrect: this.state.incorrect + 1,
        },
        () => {
          this._completeQuiz();
        }
      );
    } else {
      this.setState(
        {
          incorrect: this.state.incorrect + 1,
        },
        () => {
          this.generateNewProblem();
        }
      );
    }
  }

  _completeQuiz() {
    clearInterval(this.intervalId);
    Alert.alert(
      'Quiz Complete',
      `Level: ${this.state.selectedLevel}\nCategory: ${
        this.state.mathCategory
      }\nCorrect Answers: ${this.state.correct}\nIncorrect Answers: ${
        this.state.incorrect
      }\nTime Remaining: ${this.state.timeRemaining}`,
      [
        {
          text: 'Go Back',
          onPress: () => this.props.navigation.goBack(),
          style: 'cancel',
        },
        {
          text: 'Start Over',
          onPress: () => {
            clearTimeout(this.timeoutId);
            this._getStarted();
          },
        },
      ],
      { cancelable: false }
    );
  }

  _submitAnswer() {
    const correct = this.state.correctAnswer === Number(this.state.answer);
    this.setState(
      {
        answer: null,
        correct: correct ? this.state.correct + 1 : this.state.correct,
        incorrect: correct ? this.state.incorrect : this.state.incorrect + 1,
      },
      () => {
        if (this.state.questionNumber === 20) {
          this._completeQuiz();
        } else {
          this.generateNewProblem();
        }
      }
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
            {Platform.OS === 'ios' ? (
              <Button
                color="#25265E"
                containerViewStyle={{ right: 20 }}
                buttonStyle={{
                  borderRadius: 8,
                  borderColor: 'silver',
                  borderWidth: 1,
                  width: '25%',
                  height: 30,
                  padding: 0,
                }}
                textStyle={{ fontSize: 12 }}
                title="Practice"
                backgroundColor="white"
                onPress={() => this.props.navigation.goBack()}
              />
            ) : null}
          </View>

          <Text
            style={{
              color: 'blue',
              textAlign: 'left',
              marginLeft: 10,
              paddingTop: 10,
            }}
          >
            {`Time Remaining: ${this.state.timeRemaining}
Problem: ${this.state.questionNumber} / 20`}
          </Text>
          <View style={styles.problemContainer}>
            <View style={{ width: 180 }}>
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
                  {this.state.operation}
                  {' '}
                  {this.state.denomenator}
                </Text>
              </Text>
              <View
                style={{
                  alignItems: 'flex-end',
                }}
              >
                <TextInput
                  ref={(input) => {
                    this.answerInput = input;
                  }}
                  blurOnSubmit={false}
                  keyboardType="numeric"
                  textAlign="right"
                  style={{
                    fontSize: 60,
                    width: 110,
                    height: 70,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
                  onChangeText={value => this.setState({ answer: value })}
                  value={this.state.answer}
                  onSubmitEditing={() => this._submitAnswer()}
                />
              </View>
            </View>
          </View>
          <View style={[styles.addSomeMargin]}>
            <Divider
              style={{
                backgroundColor: '#5A95FF',
                marginBottom: 10,
              }}
            />
            <View style={{ alignItems: 'center', marginTop: 15 }}>
              <View style={styles.specialContainer}>
                <View style={styles.specialButtonContainer}>
                  <Button
                    containerViewStyle={{
                      width: 100,
                      height: 30,
                    }}
                    color="#25265E"
                    buttonStyle={{
                      borderRadius: 8,
                      padding: 5,
                      borderColor: 'silver',
                      borderWidth: 1,
                    }}
                    textStyle={{ fontSize: 16 }}
                    title="Skip"
                    backgroundColor="white"
                    onPress={() => this._skipQuestion()}
                  />
                </View>
                <View
                  style={[
                    styles.specialButtonContainer,
                    {
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                    },
                  ]}
                >
                  <Button
                    containerViewStyle={{
                      width: 120,
                      height: 30,
                    }}
                    buttonStyle={{
                      borderRadius: 8,
                      paddingTop: 6,
                      paddingBottom: 6,
                    }}
                    textStyle={{ fontSize: 16 }}
                    color="white"
                    title="Submit"
                    backgroundColor="#5A95FF"
                    onPress={() => this._submitAnswer()}
                  />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default MathPracticeScreen;
