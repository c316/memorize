import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
    minHeight: '100%',
  },
  eventDeatils: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'center',
    backgroundColor: '#2DC76D',
    minWidth: '100%',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  history: {
    flexGrow: 3,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'center',
    backgroundColor: 'yellow',
    minWidth: '100%',
  },
  textCenter: {
    textAlign: 'center',
  },
});
const History = () => (
  <View style={styles.flexContainer}>
    <View style={styles.eventDeatils}>
      <Text style={styles.textCenter}>Test event details</Text>
    </View>
    <View style={styles.history}>
      <Text style={styles.textCenter}>Test event History</Text>
    </View>
  </View>
);

export default History;
