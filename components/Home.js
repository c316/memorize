import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
    height: '100%',
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
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  h3: {
    fontSize: 18,
    textAlign: 'center',
  },
  mainVerse: {
    top: 10,
  },
  madeBy: {
    fontSize: 16,
    color: 'rgba(37, 38, 94, 0.6)',
    textAlign: 'center',
    letterSpacing: 0.8,
  },
  button: {
    backgroundColor: 'firebrick',
    borderColor: 'firebrick',
    borderWidth: 10,
    margin: 20,
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    height: 50,
    opacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  verseDates: {
    fontSize: 16,
    marginTop: 30,
  },
  nextPreviousContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  right: {
    left: '15%',
  },
  headerBox: {
    display: 'flex',
    alignItems: 'stretch',
    height: 135,
    width: '100%',
    backgroundColor: 'rgba(208, 2, 27, 0.85)',
    elevation: 1,
    marginTop: 30,
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 12,
  },
  headerUnderline: {
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    borderBottomWidth: 2,
    backgroundColor: 'rgba(117, 64, 238, 0.2)',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    borderRadius: 5,
  },
  headerText: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'center',
    marginTop: 15,
    color: 'white',
    fontSize: 34,
    letterSpacing: 3,
  },
  subText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontWeight: '100',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    marginTop: 15,
    textAlign: 'center',
    letterSpacing: 2,
    lineHeight: 26,
  },
  verse: {
    textAlign: 'left',
    margin: 15,
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: '300',
    color: 'rgba(37, 38, 94, 1)',
  },
  verseReference: {
    margin: 15,
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: '400',
    color: 'rgba(37, 38, 94, 1)',
  },
});

const Home = () => (
  <SafeAreaView style={styles.container}>
    <TouchableHighlight
      onPress={() => {
        Linking.openURL('https://joshjoe.com').catch(err =>
          console.error('An error occurred', err));
      }}
      activeOpacity={75 / 100}
      underlayColor="rgb(210,210,210)"
      style={styles.top}
    >
      <Text style={styles.madeBy}>
        Made with{' '}
        <Text style={{ color: 'rgba(208, 2, 27, 0.6)', fontSize: 14 }}>♥</Text>{' '}
        by JoshJoe
      </Text>
    </TouchableHighlight>
    <View style={styles.headerBox}>
      <View style={[styles.headerTitle]}>
        <Text style={[styles.headerText]}>CPLS Memorize</Text>
      </View>
      <View style={styles.headerUnderline} />
      <Text style={styles.subText}>Hide His Word in Your Heart</Text>
    </View>
    <Image
      style={{
        width: 250,
        height: 259,
        shadowOffset: { height: 6 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
      }}
      resizeMode="contain"
      source={require('../assets/images/CPLS.png')}
    />
    <Text style={styles.verse}>
      I have stored up your word in my heart, that I might not sin against you.
    </Text>

    <TouchableHighlight
      onPress={() => {
        Linking.openURL('http://www.bible.com/bible/59/psa.119.11.esv').catch(err => console.error('An error occurred', err));
      }}
      activeOpacity={75 / 100}
      underlayColor="rgb(210,210,210)"
      style={styles.mainVerse}
    >
      <Text style={[styles.right, styles.verseReference]}>
        Psalm 119:11 (ESV)
      </Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default Home;
