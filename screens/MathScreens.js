import React from "react";
import { View, Button, Text, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";
import MathFacts from "../components/MathFacts";
import { styles } from "../styles/styles";
import FlashCards from "../components/FlashCards";
import NumberGrid from "../components/NumberGrid";

class MathFactsScreen extends React.Component {
  static navigationOptions = {
    title: "Math",
  };

  render() {
    return (
      <View style={styles.container}>
        <MathFacts navigation={this.props.navigation} />
      </View>
    );
  }
}

const MathScreens = StackNavigator({
  MathFacts: { screen: MathFactsScreen },
  FlashCards: {
    navigationOptions: {
      title: "Flash Cards",
    },
    screen: FlashCards,
  },
  NumberGrid: {
    navigationOptions: {
      title: "Pick a Level",
    },
    screen: NumberGrid,
  },
});

export default MathScreens;
