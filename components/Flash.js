import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { PricingCard } from "react-native-elements";

class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showFact: false };
  }

  toggleShow() {
    this.setState({ showFact: !this.state.showFact });
  }

  render() {
    return (
      <PricingCard
        color="#4f9deb"
        title="Flash"
        price="2s"
        info={["1 User", "Basic Support", "All Core Features"]}
        button={{ title: "GET STARTED", icon: "flight-takeoff" }}
      />
    );
  }
}

export default Flash;
