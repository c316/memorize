import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Linking
} from 'react-native';
import { Icon } from 'react-native-elements';
import { verses } from './assets/verses';

class Verses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showVerse: 0};
  }
  componentDidMount() {

    _getWeek = function(){
      var date = new Date();
      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    let week = _getWeek();
    let year = new Date().getFullYear();
    // Find the first verse that matches today's year and week
    const thisVerse = verses.find((verse) => {
      if( (verse.week === week) && (verse.year === year) ){
        return verse;
      }
      return null;
    });

    if(!thisVerse){
      console.log('finding closest greater week verse');
      var nearestGreaterWeekVerse = verses.find((verse) => {
        if( (verse.week > week) && (verse.year === year) ){
          return verse;
        }
        return null;
      });
    }

    const useThisVerse = thisVerse ? thisVerse : nearestGreaterWeekVerse;

    // TODO: need to refactor this redirect for react native
    // if you still can't find a verse that is greater than, redirect to not-found page
    /*if(!useThisVerse){
     console.log('redirecting');
     return (
     <Redirect to="/notfound"/>
     );
     }*/

    const index = verses.findIndex(x => x._id === useThisVerse._id);

    // Set the verse to this week's verse
    this.setState({ showVerse: index });
  }

  _nextVerse(){
    // Set the verse to the next verse
    let verseIndex = this.state.showVerse;
    this.setState({showVerse: verseIndex + 1});
  }
  _previousVerse(){
    // Set the verse to the previous verse
    let verseIndex = this.state.showVerse;
    if(verseIndex === 0){
      return;
    }
    this.setState({showVerse: verseIndex - 1});
  }

  _getVerseDates(){
    let verseIndex = this.state.showVerse;
    let useThisVerse = verses[verseIndex];
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const startDate = new Date(`${useThisVerse.dateRange.start.month + 1}/${useThisVerse.dateRange.start.day}/${useThisVerse.year}`);
    let endDate = new Date(`${useThisVerse.dateRange.end.month + 1}/${useThisVerse.dateRange.end.day}/${useThisVerse.year}`);

    const dateFrom = monthNames[startDate.getMonth()] + " " + startDate.getDate();

    let dateTo;
    if(useThisVerse.dateRange.start.month === useThisVerse.dateRange.end.month){
      dateTo = endDate.getDate();
    } else {
      dateTo = monthNames[endDate.getMonth()] + " " + endDate.getDate();
    }
    return {dateTo, dateFrom};
  };

  render() {
    const useThisVerse = verses[this.state.showVerse];
    let endVerse = useThisVerse.endVerse ? "-" + useThisVerse.endVerse : "";
    let bookImagePath;
    switch(useThisVerse.book) {
      case '1 Corinthians':
        bookImagePath = require(`./assets/images/bible/1Corinthians.png`);
        break;
      case '1 John':
        bookImagePath = require(`./assets/images/bible/1John.png`);
        break;
      case '1 Peter':
        bookImagePath = require(`./assets/images/bible/1Peter.png`);
        break;
      case '1 Thessalonians':
        bookImagePath = require(`./assets/images/bible/1Thessalonians.png`);
        break;
      case '2 Corinthians':
        bookImagePath = require(`./assets/images/bible/1Corinthians.png`);
        break;
      case '2 Thessalonians':
        bookImagePath = require(`./assets/images/bible/2Thessalonians.png`);
        break;
      case '2 Timothy':
        bookImagePath = require(`./assets/images/bible/2Timothy.png`);
        break;
      case 'Acts':
        bookImagePath = require(`./assets/images/bible/Acts.png`);
        break;
      case 'Colossians':
        bookImagePath = require(`./assets/images/bible/Colossians.png`);
        break;
      case 'Ephesians':
        bookImagePath = require(`./assets/images/bible/Ephesians.png`);
        break;
      case 'Galatians':
        bookImagePath = require(`./assets/images/bible/Galatians.png`);
        break;
      case 'Genesis':
        bookImagePath = require(`./assets/images/bible/Genesis.png`);
        break;
      case 'Hebrews':
        bookImagePath = require(`./assets/images/bible/Hebrews.png`);
        break;
      case 'Isaiah':
        bookImagePath = require(`./assets/images/bible/Isaiah.png`);
        break;
      case 'James':
        bookImagePath = require(`./assets/images/bible/James.png`);
        break;
      case 'John':
        bookImagePath = require(`./assets/images/bible/John.png`);
        break;
      case 'Leviticus':
        bookImagePath = require(`./assets/images/bible/Leviticus.png`);
        break;
      case 'Luke':
        bookImagePath = require(`./assets/images/bible/Luke.png`);
        break;
      case 'Mark':
        bookImagePath = require(`./assets/images/bible/Mark.png`);
        break;
      case 'Matthew':
        bookImagePath = require(`./assets/images/bible/Matthew.png`);
        break;
      case 'Nahum':
        bookImagePath = require(`./assets/images/bible/Nahum.png`);
        break;
      case 'Numbers':
        bookImagePath = require(`./assets/images/bible/Numbers.png`);
        break;
      case 'Philippians':
        bookImagePath = require(`./assets/images/bible/Philippians.png`);
        break;
      case 'Proverbs':
        bookImagePath = require(`./assets/images/bible/Proverbs.png`);
        break;
      case 'Psalm':
        bookImagePath = require(`./assets/images/bible/Psalm.png`);
        break;
      case 'Romans':
        bookImagePath = require(`./assets/images/bible/Romans.png`);
        break;
    }

    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 225,
            height: 150,
          }}
          resizeMode={"contain"}
          source={ bookImagePath }
          title={useThisVerse.book} />
        <Text style={styles.h2}>{useThisVerse.text}</Text>
        <TouchableHighlight
          onPress={() => {Linking.openURL(useThisVerse.verseURL).catch(err => console.error('An error occurred', err))}}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Text style={styles.h3}>{`${useThisVerse.book} ${useThisVerse.chapter}:${useThisVerse.startVerse}${endVerse} (ESV)`}</Text>
        </TouchableHighlight>

        <Text style={styles.verseDates}>
          Verse Dates: {`${this._getVerseDates().dateFrom} - ${this._getVerseDates().dateTo}`}{useThisVerse.customDateRange ? "*" : ""}
        </Text>

        <View style={styles.nextPreviousContainer}>
          {this.state.showVerse === 0 ? null : <Icon
            color='#f50'
            size={60}
            name="chevron-left"
            style={styles.left}
            onPress={() => this._previousVerse()}
          />}
          {this.state.showVerse === (verses.length -1) ? null : <Icon
            color='#f50'
            size={60}
            name="chevron-right"
            style={styles.right}
            onPress={() => this._nextVerse()}
          />}
        </View>
        <Text style={styles.esvCredit}>
          ESV 2001 by Crossway Bibles, a division of Good News Publishers
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    height: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  h1: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    margin: 10
  },
  h3: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: "firebrick",
    borderColor: "firebrick",
    borderWidth: 10,
    margin: 20,
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    height: 50,
    opacity: 1
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  verseDates: {
    fontSize: 16,
    marginTop: 30
  },
  nextPreviousContainer:{
    position: "absolute",
    bottom: 50,
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    right: 110,
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    left: 110,
  },
  esvCredit: {
    fontSize: 10,
    position: "absolute",
    bottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
});


export default Verses;
