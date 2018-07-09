import React from 'react';
import { StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-listview';

import historyTimeline from '../assets/timelines';
import Header from './Header';

const styles = StyleSheet.create({
  timeContainerStyle: {
    minWidth: 90,
    paddingLeft: 5,
    paddingTop: 2,
  },
  timeStyle: {
    fontSize: 10,
    fontWeight: '100',
    letterSpacing: -0.4,
  },
  titleStyle: {
    fontWeight: '300',
    marginTop: -15,
    marginBottom: 20,
    fontSize: 20,
  },
  descriptionStyle: {
    fontWeight: '200',
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
});

class Timelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timelineData: [], currentEvent: {}, shownEvents: [] };
  }

  componentWillMount() {
    const { grade, showAllEvents, type } = this.props;
    const timelineData = historyTimeline.filter((event) => {
      if (type) {
        return event.grade === grade && event.type === type;
      }
      return event.grade === grade;
    });

    const currentEvent = timelineData[0];
    this.setState({
      currentEvent,
      timelineData,
      shownEvents: showAllEvents ? timelineData : [timelineData[0]],
      showAllEvents,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showAllEvents !== this.state.showAllEvents) {
      this.setState({
        showAllEvents: nextProps.showAllEvents,
        shownEvents: nextProps.showAllEvents
          ? this.state.timelineData
          : [this.state.timelineData[0]],
      });
    }
  }

  nextEvent() {
    const { timelineData } = this.state;
    const index = timelineData.indexOf(this.state.currentEvent);
    if (timelineData.length < index) {
      return;
    }
    const showTheseEvents = this.state.shownEvents;
    showTheseEvents.push(timelineData[index + 1]);
    this.setState({
      currentEvent: timelineData[index + 1],
      shownEvents: showTheseEvents,
    });
  }

  previousEvent() {
    const { timelineData } = this.state;
    const index = timelineData.indexOf(this.state.currentEvent);
    if (index === 0) {
      return;
    }
    const showTheseEvents = this.state.shownEvents;
    if (showTheseEvents) {
      showTheseEvents.pop();
    }
    this.setState({
      currentEvent: timelineData[index - 1],
      shownEvents: showTheseEvents,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          currentEvent={this.state.currentEvent}
          nextEvent={() => this.nextEvent()}
          previousEvent={() => this.previousEvent()}
        />
        <Timeline
          data={this.state.shownEvents}
          options={{
            style: {
              paddingTop: 10,
            },
          }}
          circleColor="#2DC76D"
          lineColor="#2DC76D"
          innerCircle="dot"
          lineWidth={2}
          circleSize={12}
          timeContainerStyle={styles.timeContainerStyle}
          timeStyle={styles.timeStyle}
          titleStyle={styles.titleStyle}
          descriptionStyle={styles.descriptionStyle}
        />
      </React.Fragment>
    );
  }
}

export default Timelines;
