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

const Timelines = ({ grade }) => {
  const data = historyTimeline.filter(event => event.grade === grade);
  return (
    <React.Fragment>
      <Header />
      <Timeline
        data={data}
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
};

export default Timelines;
