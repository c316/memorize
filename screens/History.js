import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Timeline from '../components/Timeline';

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
    flexBasis: 'auto',
    alignSelf: 'center',
    backgroundColor: '#2DC76D',
    minWidth: '100%',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    paddingTop: Platform.OS === 'ios' ? 28 : 0,
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  history: {
    flexGrow: 1,
    flexShrink: 3,
    flexBasis: 'auto',
    alignSelf: 'center',
    minWidth: '100%',
  },
  textCenter: {
    textAlign: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'sf-pro-display',
    color: 'white',
    fontSize: 28,
    marginLeft: 5,
    marginRight: 5,
  },
  dateText: {
    fontFamily: 'sf-pro-text',
    color: 'white',
    fontSize: 22,
    marginTop: 22,
    textAlign: 'center',
  },
  underlineMain: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginTop: 12,
    marginLeft: 40,
    marginRight: 40,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  scriptureReferenceText: {
    fontFamily: 'sf-pro-text',
    color: 'white',
    fontSize: 20,
    marginTop: 26,
    marginBottom: 26,
    textAlign: 'center',
  },
});
const History = () => (
  <View style={styles.flexContainer}>
    <View style={styles.eventDeatils}>
      <View style={styles.topRow}>
        <Icon
          color="white"
          size={35}
          name="chevron-left"
          onPress={() => this._previousEvent()}
        />
        <Text style={styles.headerText}>The Mycenaean Culture</Text>
        <Icon
          color="white"
          size={35}
          name="chevron-right"
          onPress={() => this._nextEvent()}
        />
      </View>
      <View style={styles.underlineMain} />
      <Text style={styles.dateText}>c. 1450 - 1200 B.C.</Text>
      <Text style={styles.scriptureReferenceText}>no scripture reference</Text>
    </View>
    <View style={styles.history}>
      <Timeline />
    </View>
  </View>
);

export default History;
