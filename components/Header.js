import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { moderateScale } from '../miscFunctions';

const { width } = Dimensions.get('window');

const headerStyles = StyleSheet.create({
  headerBox: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: 190,
    backgroundColor: '#2DC76D',
    shadowOffset: { height: 1 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: 1,
  },
  headerTitle: {
    flex: 2,
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
  scriptureReference: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: moderateScale(20),
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  scriptureReferenceText: {
    color: 'white',
    fontSize: 18,
  },
});

const Header = ({ currentEvent, nextEvent, previousEvent }) => (
  <View style={headerStyles.headerBox}>
    <View style={[headerStyles.headerTitle]}>
      <Icon
        color="white"
        size={30}
        name="chevron-left"
        onPress={() => previousEvent()}
        containerStyle={{ right: 5 }}
      />
      <Text style={[headerStyles.titleText]}>{currentEvent.title}</Text>
      <Icon
        color="white"
        size={30}
        name="chevron-right"
        onPress={() => nextEvent()}
        containerStyle={{ left: 5 }}
      />
    </View>
    <View style={headerStyles.headerUnderline} />
    <View style={headerStyles.date}>
      <Text style={headerStyles.dateText}>{currentEvent.time}</Text>
    </View>
    <View style={headerStyles.scriptureReference}>
      <Text style={headerStyles.scriptureReferenceText}>
        {currentEvent.description || 'no scripture reference'}
      </Text>
    </View>
  </View>
);

export default Header;
