import React from "react";
import { Button, Platform } from "react-native";
import { Icon } from "react-native-elements";
import Timelines from "../components/Timelines";

export default class TimelineForGradeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      tabBarLabel: "Timelines",
      tabBarIcon: () => <Icon name="history" color="white" size={20} />,
      headerRight: (
        <Button
          onPress={
            params.showHideAllEvents || (() => console.log("placeholder"))
          }
          title="Show/Hide All"
        />
      ),
    };
  };
  state = {
    showAllEvents: false,
  };

  componentWillMount() {
    this.props.navigation.setParams({
      showHideAllEvents: this._showHideAllEvents,
    });
  }

  _showHideAllEvents = () => {
    this.setState({ showAllEvents: !this.state.showAllEvents });
  };

  render() {
    const {
      params: { grade, type },
    } = this.props.navigation.state;
    return (
      <Timelines
        grade={grade}
        showAllEvents={this.state.showAllEvents}
        type={type}
      />
    );
  }
}
