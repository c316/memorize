import React from 'react';
import { Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Timelines from '../components/Timelines';

const LogoTitle = () => (
  <Icon name="history" color="white" style={{ width: 30, height: 30 }} />
);

export default class TimelineForGradeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Timelines',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="history" color={tintColor} size={20} />
    ),
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Hide All"
        color="white"
      />
    ),
  };

  render() {
    const { params } = this.props.navigation.state;
    const grade = params ? params.grade : null;
    return <Timelines grade={grade} />;
  }
}
