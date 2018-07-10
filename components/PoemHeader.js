import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const headerStyles = StyleSheet.create({
  headerBox: {
    display: 'flex',
    alignItems: 'stretch',
    height: 130,
    backgroundColor: '#4A4A4A',
    shadowOffset: { height: 1 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: 1,
  },
  headerTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  headerUnderline: {
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    shadowOffset: { height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    borderRadius: 5,
  },
  date: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'center',
    marginTop: 15,
  },
  titleText: {
    color: 'white',
    fontSize: 24,
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
});

const PoemHeader = ({ poem }) => (
  <View style={headerStyles.headerBox}>
    <View style={[headerStyles.headerTitle]}>
      <Text style={[headerStyles.titleText]}>{poem && poem.title}</Text>
    </View>
    <View style={headerStyles.headerUnderline} />
    <View style={headerStyles.date}>
      <Text style={headerStyles.dateText}>{poem && poem.author}</Text>
    </View>
  </View>
);

export default PoemHeader;
