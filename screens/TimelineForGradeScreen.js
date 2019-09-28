import React from 'react';
import { Button } from 'react-native-elements';
import Timelines from '../components/Timelines';

export default class TimelineForGradeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      tabBarLabel: 'Timelines',
      headerRight: (
        <Button
          onPress={params.showHideAllEvents}
          title="Show/Hide All"
          titleStyle={{
            color: 'white',
          }}
          type="clear"
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
