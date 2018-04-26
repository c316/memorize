import React from 'react';
import PropType from 'prop-types';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import poems from '../assets/poems';

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  poemTitle: {
    fontSize: 28,
    margin: 10,
  },
  poemAuthor: {
    fontSize: 24,
    margin: 10,
    marginTop: 15,
  },
  poem: {
    fontSize: 22,
    margin: 10,
  },
  leftContainer: {
    alignSelf: 'flex-start',
    marginLeft: 10,
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
      <React.Fragment>
        <ScrollView contentContainerStyle={styles.center}>
          <Icon
            containerStyle={styles.leftContainer}
            raised
            name="chevron-left"
            type="font-awesome"
            color="#f50"
            onPress={this.props.onPress}
          />
          <Text style={styles.poemTitle}>{poemObject.title}</Text>
          {poemObject.author ? (
            <Text style={styles.poemAuthor}>{poemObject.author}</Text>
          ) : null}
          <Text style={styles.poem}>{poemObject.poem}</Text>
        </ScrollView>
      </React.Fragment>
    );
  }
}

Poem.propTypes = {
  poem: PropType.string.isRequired,
  onPress: PropType.func.isRequired,
};

export default Poem;
