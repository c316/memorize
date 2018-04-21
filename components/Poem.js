import React from 'react';
import PropType from 'prop-types';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { poems } from '../assets/poems';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  scroll: {
    marginTop: 0,
    marginBottom: 140,
  },
  poemTitle: {
    fontSize: 28,
    margin: 10,
    marginTop: 15,
  },
  poemAuthor: {
    fontSize: 24,
    margin: 10,
    marginTop: 15,
  },
  poem: {
    fontSize: 22,
    margin: 10,
    marginTop: 30,
  },
});

class Poem extends React.Component {
  render() {
    const thisPoem = this.props.poem;
    const poemObject = poems.find((poem) => {
      if (poem._id === thisPoem) {
        return poem;
      }
      return null;
    });

    return (
      <View>
        <List style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }}>
          <ListItem
            key="back"
            title="Go back"
            hideChevron
            leftIcon={{ name: 'chevron-left' }}
            onPress={this.props.onPress}
          />
        </List>
        <ScrollView style={styles.scroll}>
          <View style={styles.center}>
            <Text style={styles.poemTitle}>{poemObject.title}</Text>
            {poemObject.author ? (
              <Text style={styles.poemAuthor}>{poemObject.author}</Text>
            ) : null}
            <Text style={styles.poem}>{poemObject.poem}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Poem.propTypes = {
  poem: PropType.string.isRequired,
  onPress: PropType.func.isRequired,
};

export default Poem;
