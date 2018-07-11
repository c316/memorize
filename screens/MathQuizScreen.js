import React from 'react';
import {
  Alert,
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import { Icon, Divider, Text, Button } from 'react-native-elements';

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
    minHeight: '40%',
  },
  problemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tallContainer: {
    height: '50%',
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
    fontSize: 72,
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
    bottom: 12,
    left: 10,
  },
  divider: {
    fontSize: 30,
    fontWeight: '100',
    margin: 1,
    bottom: 6,
  },
  totalQuestions: {
    fontSize: 20,
    fontWeight: '100',
    top: 12,
    right: 12,
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
      questionNumber: 1,
      correct: 0,
      incorrect: 0,
      timeRemaining: 60,
      completed: false,
      showAnswer: false,
      answer: '',
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
      Selected Category: ${this.state.mathCategory}`,
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
    this.intervalId = setInterval(() => {
      this.setState({ timeRemaining: this.state.timeRemaining - 1 }, () =>
        console.log(this.state.timeRemaining));
    }, 1000);

    this.timeoutId = setTimeout(() => {
      this.setState({ completed: true }, () => console.log('complete'));
      clearInterval(this.intervalId);
    }, 61000);
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

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/circlesForMath.png')}
        style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
        imageStyle={{ opacity: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.instructions}>
            <Text style={{ fontSize: 16, lineHeight: 20 }}>
              Enter an answer and touch{' '}
              <Text style={{ fontWeight: '500' }}>Submit</Text> to go to the
              next problem. Touch Skip to skip this problem.
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
          <View style={[styles.addSomeMargin]}>
            <Divider
              style={{
                backgroundColor: 'grey',
                marginBottom: 10,
              }}
            />
            <Text
              style={{ color: 'blue', textAlign: 'center', marginBottom: 15 }}
            >
              Time Remaining: {this.state.timeRemaining}
            </Text>
            <View style={{ alignItems: 'center' }}>
              <Text>
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
                  onPress={() =>
                    this.props.navigation.navigate('MathQuizScreen', {
                      mathCategory: this.state.mathCategory,
                      selectedLevel: this.state.selectedLevel,
                    })
                  }
                />
                <View>
                  <Text style={styles.questionNumber}>
                    {this.state.questionNumber}
                  </Text>
                </View>
                <View transform={[{ skewY: '-45deg' }]}>
                  <Text style={styles.divider}>__</Text>
                </View>
                <View style={{}}>
                  <Text style={styles.totalQuestions}>20</Text>
                </View>
                <Button
                  containerViewStyle={{
                    width: 120,
                    height: 30,
                  }}
                  buttonStyle={{
                    borderRadius: 8,
                    padding: 5,
                    marginLeft: 30,
                  }}
                  textStyle={{ fontSize: 16 }}
                  color="white"
                  title="Submit"
                  backgroundColor="#5A95FF"
                  onPress={() =>
                    this.props.navigation.navigate('MathQuizScreen', {
                      mathCategory: this.state.mathCategory,
                      selectedLevel: this.state.selectedLevel,
                    })
                  }
                />
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default MathPracticeScreen;
