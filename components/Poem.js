import React from 'react';
import {
  ScrollView, StyleSheet, Text, View
} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poem: {
    fontSize: 22,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ({ poem }) => (
  <ScrollView style={styles.scroll}>
    <View style={styles.center}>
      <Text style={styles.poem}>{poem && poem.poem}</Text>
    </View>
  </ScrollView>
);
