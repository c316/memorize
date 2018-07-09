import React from 'react';
import { Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Timelines from '../components/Timelines';

const LogoTitle = () => (
  <Icon name="history" color="white" style={{ width: 30, height: 30 }} />
);

export default class TimelineForGradeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      tabBarLabel: 'Timelines',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="history" color={tintColor} size={20} />
      ),
      headerRight: (
        <React.Fragment>
          <Button
            onPress={
              params.showHideAllEvents || (() => console.log('placeholder'))
            }
            title="Show/Hide All"
            color="white"
          />
        </React.Fragment>
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
