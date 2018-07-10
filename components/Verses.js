import React from 'react';
import {
  Dimensions,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Linking,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import { Icon } from 'react-native-elements';
import verses from '../assets/verses';

import { getWeek, moderateScale } from '../miscFunctions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: '#7540EE',
    shadowOffset: { height: -1 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: -1,
  },
  headerBox: {
    flex: 1,
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'baseline',
    height: '100%',
  },
  imageStyle: {
    shadowOffset: { height: 6 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    overflow: 'visible',
    height: 160,
    alignSelf: 'center',
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  verseText: {
    flex: 1,
    fontSize: moderateScale(20),
    alignSelf: 'flex-start',
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginTop: 15,
    marginBottom: 35,
    color: 'rgba(37, 38, 94, 0.8)',
  },
  verse: {
    fontSize: moderateScale(26),
    color: 'rgba(37, 38, 94, 1)',
    letterSpacing: 0.78,
    alignSelf: 'center',
  },
  verseDates: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  esvCredit: {
    margin: 8,
    fontSize: 9,
    textAlign: 'center',
    color: 'white',
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
    borderBottomColor: 'rgba(117, 64, 238, 1)',
    borderBottomWidth: 2,
    shadowOffset: { height: 2 },
    shadowColor: 'rgba(117, 64, 238, 0.8)',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: 'black',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  controlsBlock: {
    height: 125,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: '#7540EE',
    shadowOffset: { height: -1 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: -1,
  },
  verseBlock: {
    marginTop: 20,
    alignSelf: 'center',
  },
  dot: {
    height: 14,
    width: 14,
    borderRadius: 14 / 2,
    backgroundColor: '#FF7052',
    left: 10,
    bottom: 15,
    borderWidth: 2,
    borderColor: 'white',
  },
});

class Verses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showVerse: 0 };
  }
  componentWillMount() {
    const week = getWeek();
    const year = new Date().getFullYear();
    // Find the first verse that matches today's year and week
    const thisVerse = verses.find((verse) => {
      if (verse.week === week && verse.year === year) {
        return verse;
      }
      return null;
    });

    let nearestGreaterWeekVerse;
    if (!thisVerse) {
      nearestGreaterWeekVerse = verses.find((verse) => {
        if (verse.week > week && verse.year === year) {
          return verse;
        }
        return null;
      });
    }

    const useThisVerse = thisVerse || nearestGreaterWeekVerse;

    let index;
    if (useThisVerse) {
      index = verses.findIndex(x => x._id === useThisVerse._id);
    } else {
      index = verses.length - 1;
    }

    // Set the verse to this week's verse
    this.setState({ showVerse: index });
  }

  _nextVerse() {
    // Set the verse to the next verse
    const verseIndex = this.state.showVerse;
    this.setState({ showVerse: verseIndex + 1 });
  }
  _previousVerse() {
    // Set the verse to the previous verse
    const verseIndex = this.state.showVerse;
    if (verseIndex === 0) {
      return;
    }
    this.setState({ showVerse: verseIndex - 1 });
  }

  _getVerseDates() {
    const verseIndex = this.state.showVerse;
    const useThisVerse = verses[verseIndex];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const startDate = new Date(`${useThisVerse.dateRange.start.month + 1}/${
      useThisVerse.dateRange.start.day
    }/${useThisVerse.year}`);
    const endDate = new Date(`${useThisVerse.dateRange.end.month + 1}/${
      useThisVerse.dateRange.end.day
    }/${useThisVerse.year}`);

    const dateFrom = `${
      monthNames[startDate.getMonth()]
    } ${startDate.getDate()}`;

    let dateTo;
    if (
      useThisVerse.dateRange.start.month === useThisVerse.dateRange.end.month
    ) {
      dateTo = endDate.getDate();
    } else {
      dateTo = `${monthNames[endDate.getMonth()]} ${endDate.getDate()}`;
    }
    return { dateTo, dateFrom };
  }

  render() {
    const useThisVerse = verses[this.state.showVerse];
    const endVerse = useThisVerse.endVerse ? `-${useThisVerse.endVerse}` : '';
    let bookImagePath;
    switch (useThisVerse.book) {
    case '1 Corinthians':
      bookImagePath = require('../assets/images/bible/1Corinthians.png');
      break;
    case '1 John':
      bookImagePath = require('../assets/images/bible/1John.png');
      break;
    case '1 Peter':
      bookImagePath = require('../assets/images/bible/1Peter.png');
      break;
    case '1 Thessalonians':
      bookImagePath = require('../assets/images/bible/1Thessalonians.png');
      break;
    case '2 Corinthians':
      bookImagePath = require('../assets/images/bible/1Corinthians.png');
      break;
    case '2 Thessalonians':
      bookImagePath = require('../assets/images/bible/2Thessalonians.png');
      break;
    case '2 Timothy':
      bookImagePath = require('../assets/images/bible/2Timothy.png');
      break;
    case 'Acts':
      bookImagePath = require('../assets/images/bible/Acts.png');
      break;
    case 'Colossians':
      bookImagePath = require('../assets/images/bible/Colossians.png');
      break;
    case 'Ephesians':
      bookImagePath = require('../assets/images/bible/Ephesians.png');
      break;
    case 'Galatians':
      bookImagePath = require('../assets/images/bible/Galatians.png');
      break;
    case 'Genesis':
      bookImagePath = require('../assets/images/bible/Genesis.png');
      break;
    case 'Hebrews':
      bookImagePath = require('../assets/images/bible/Hebrews.png');
      break;
    case 'Isaiah':
      bookImagePath = require('../assets/images/bible/Isaiah.png');
      break;
    case 'James':
      bookImagePath = require('../assets/images/bible/James.png');
      break;
    case 'John':
      bookImagePath = require('../assets/images/bible/John.png');
      break;
    case 'Leviticus':
      bookImagePath = require('../assets/images/bible/Leviticus.png');
      break;
    case 'Luke':
      bookImagePath = require('../assets/images/bible/Luke.png');
      break;
    case 'Mark':
      bookImagePath = require('../assets/images/bible/Mark.png');
      break;
    case 'Matthew':
      bookImagePath = require('../assets/images/bible/Matthew.png');
      break;
    case 'Nahum':
      bookImagePath = require('../assets/images/bible/Nahum.png');
      break;
    case 'Numbers':
      bookImagePath = require('../assets/images/bible/Numbers.png');
      break;
    case 'Philippians':
      bookImagePath = require('../assets/images/bible/Philippians.png');
      break;
    case 'Proverbs':
      bookImagePath = require('../assets/images/bible/Proverbs.png');
      break;
    case 'Psalm':
      bookImagePath = require('../assets/images/bible/Psalm.png');
      break;
    case 'Romans':
      bookImagePath = require('../assets/images/bible/Romans.png');
      break;

    default:
      bookImagePath = null;
    }

    return (
      <ImageBackground
        source={require('../assets/images/circles.png')}
        style={{ width: '100%', height: '100%' }}
        imageStyle={{ opacity: 0.1 }}
      >
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={bookImagePath}
            title={useThisVerse.book}
          />

          <View style={styles.verseBlock}>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(useThisVerse.verseURL).catch(err =>
                  console.error('An error occurred', err));
              }}
              activeOpacity={75 / 100}
              underlayColor="rgb(210,210,210)"
            >
              <Text style={styles.verse}>
                {`${useThisVerse.book} ${useThisVerse.chapter}:${
                  useThisVerse.startVerse
                }${endVerse} (ESV)`}
              </Text>
            </TouchableHighlight>
            <View style={styles.headerUnderline} />
          </View>
          <View style={styles.headerBox}>
            <Text style={styles.verseText}>{useThisVerse.text}</Text>
          </View>
          <View style={styles.controlsBlock}>
            <View style={[styles.headerTitle]}>
              {this.state.showVerse === 0 ? (
                <Text />
              ) : (
                <Icon
                  color="white"
                  size={30}
                  name="chevron-left"
                  onPress={() => this._previousVerse()}
                />
              )}
              <Text style={styles.verseDates}>
                {`${this._getVerseDates().dateFrom} - ${
                  this._getVerseDates().dateTo
                }`}
                {useThisVerse.customDateRange ? (
                  <View style={{}}>
                    <View style={styles.dot} />
                  </View>
                ) : (
                  <Text title="" />
                )}
              </Text>

              {this.state.showVerse === verses.length - 1 ? (
                <Text title="" />
              ) : (
                <Icon
                  color="white"
                  size={30}
                  name="chevron-right"
                  onPress={() => this._nextVerse()}
                />
              )}
            </View>
            <Text style={styles.esvCredit}>
              ESV brought to you by Crossway (a publishing ministry of Good News
              Publishers)
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default Verses;
