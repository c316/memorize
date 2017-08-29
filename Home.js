import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Linking
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 225,
          height: 200,
        }}
        resizeMode={"contain"}
        source={require('./assets/images/CPLS.png')}
      />
      <Text style={styles.h1}>
        Hide His Word in Your Heart
      </Text>
      <Text style={styles.h2}>
        I have stored up your word in my heart, that I might not sin against you.
      </Text>
      <TouchableHighlight
        onPress={() => {Linking.openURL('http://bible.com/59/psa.119.11').catch(err => console.error('An error occurred', err))}}
        activeOpacity={75 / 100}
        underlayColor={"rgb(210,210,210)"}>
        <Text style={styles.h3}>Psalm 119:11 (ESV)</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {Linking.openURL('https://joshjoe.com').catch(err => console.error('An error occurred', err))}}
        activeOpacity={75 / 100}
        underlayColor={"rgb(210,210,210)"}
        style={styles.footer}
      >
        <Text style={styles.h3}>Made with <Text style={styles.redHeart}>♥</Text> by JoshJoe</Text>
      </TouchableHighlight>
    </View>
  );
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
    bottom: 0,
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    right: "95%"
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    left: "95%",
  },
  footer: {
    position: 'absolute',
    bottom: 60,
  },
  redHeart: {
    color: 'firebrick'
  }
});

export default Home;