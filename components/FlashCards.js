import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Divider, Text } from "react-native-elements";

class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    const { mathCategory, selectedLevel } = this.props.navigation.state.params;

    const operation = () => {
      if (mathCategory === "Addition") return "+";
      if (mathCategory === "Subtraction") return "-";
      if (mathCategory === "Multiplication") return "x";
    };

    this.state = {
      showAnswer: false,
      answer: "",
      numerator: "",
      denomenator: "",
      operation: operation(),
      mathCategory,
      selectedLevel: selectedLevel,
    };
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
      if (this.state.mathCategory === "Addition")
        return numerator + denomenator;
      if (this.state.mathCategory === "Subtraction")
        return numerator - denomenator;
      if (this.state.mathCategory === "Multiplication")
        return numerator * denomenator;
    };

    this.setState({
      answer: answer(),
      numerator,
      denomenator,
    });
  }

  componentWillMount() {
    this.generateNewProblem();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.problemCardContainer}>
          <View style={styles.problemContainer}>
            <View>
              <Text h1 style={styles.alignTextRight}>
                {this.state.numerator}
              </Text>
              <Text
                style={[
                  { textDecorationLine: "underline" },
                  styles.alignTextRight,
                ]}
                h1
              >
                <Text>{this.state.operation} </Text> {this.state.denomenator}
              </Text>
              <Text h1 style={styles.alignTextRight}>
                {this.state.answer}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.addSomeMargin}>
          <Button
            title="Next Problem"
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
            }}
            onPress={() => this.generateNewProblem()}
          />
          <Text />
          <Divider style={{ backgroundColor: "grey" }} />
          <Text h3 style={styles.titleText}>
            {" "}
            {`${this.state.mathCategory} with ${this.state.selectedLevel}'s`}
          </Text>
          <Text
            h4
            style={styles.titleText}
          >{`Touch anywhere on the problem to see the solution`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  titleText: {
    margin: 20,
    fontWeight: "200",
  },
  problemCardContainer: {
    justifyContent: "center",
    minHeight: "50%",
  },
  problemContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tallContainer: {
    height: "60%",
    justifyContent: "center",
  },
  addSomeMargin: {
    margin: 10,
  },
  alignTextRight: {
    textAlign: "right",
  },
});

export default FlashCards;
