import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
  View,
} from 'react-native';
import { moderateScale, scale } from '../miscFunctions';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mainVerse: {
    top: 10,
  },
  madeBy: {
    marginTop: 5,
    fontSize: 16,
    color: 'rgba(37, 38, 94, 0.6)',
    textAlign: 'center',
    letterSpacing: 0.8,
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
  headerBox: {
    display: 'flex',
    alignItems: 'stretch',
    height: height * 0.2,
    width: '100%',
    backgroundColor: 'rgba(208, 2, 27, 0.85)',
    elevation: 1,
    marginTop: moderateScale(20),
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: moderateScale(12),
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
    alignItems: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: moderateScale(24),
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
    marginHorizontal: 15,
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: '300',
    color: 'rgba(37, 38, 94, 1)',
  },
  verseReference: {
    margin: moderateScale(15),
    fontSize: moderateScale(20),
    letterSpacing: 1,
    fontWeight: '400',
    color: 'rgba(37, 38, 94, 1)',
  },
});

const Home = () => (
  <ImageBackground
    source={require('../assets/images/circles.png')}
    style={{ width: '100%', height: '100%' }}
    imageStyle={{ opacity: 0.1 }}
  >
    <SafeAreaView style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          Linking.openURL('https://joshjoe.com').catch(err =>
            console.error('An error occurred', err),
          );
        }}
        activeOpacity={75 / 100}
        underlayColor="rgb(210,210,210)"
        style={styles.top}
      >
        <Text style={styles.madeBy}>Made by JoshJoe</Text>
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
          width: scale(200),
          height: scale(200),
          shadowOffset: { height: 6 },
          shadowColor: 'grey',
          shadowOpacity: 0.5,
        }}
        resizeMode="contain"
        source={require('../assets/images/CPLS.png')}
      />
      <Text style={styles.verse}>
        I have stored up your word in my heart, that I might not sin against
        you.
      </Text>

      <TouchableHighlight
        onPress={() => {
          Linking.openURL('http://www.bible.com/bible/59/psa.119.11.esv').catch(
            err => console.error('An error occurred', err),
          );
        }}
        activeOpacity={75 / 100}
        underlayColor="rgb(210,210,210)"
        style={styles.mainVerse}
      >
        <Text style={[styles.verseReference]}>Psalm 119:11 (ESV)</Text>
      </TouchableHighlight>
    </SafeAreaView>
  </ImageBackground>
);

export default Home;
