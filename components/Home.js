import React from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFEFE',
    height: '100%',
    marginLeft: 10,
    marginRight: 10,
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
    fontSize: 10,
    textAlign: 'center',
    bottom: Platform.OS === 'ios' ? 10 : 0,
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
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    right: '95%',
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    left: '95%',
  },
  footer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : 10,
  },
});

const Home = () => (
  <View style={styles.container}>
    <Image
      style={{
        width: 200,
        height: 204,
      }}
      resizeMode="contain"
      source={require('../assets/images/CPLS.png')}
    />
    <Text style={styles.h1}>Hide His Word in Your Heart</Text>
    <Text style={styles.h2}>
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
      <Text style={styles.h3}>Psalm 119:11 (ESV)</Text>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => {
        Linking.openURL('https://joshjoe.com').catch(err =>
          console.error('An error occurred', err));
      }}
      activeOpacity={75 / 100}
      underlayColor="rgb(210,210,210)"
      style={styles.footer}
    >
      <Text style={styles.madeBy}>
        Made with <Text style={{ color: '#b20939' }}>♥</Text> by JoshJoe
      </Text>
    </TouchableHighlight>
  </View>
);

export default Home;