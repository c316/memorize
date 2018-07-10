import React from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import poems from '../assets/poems';

class PoemSelectionScreen extends React.Component {
  static navigationOptions = ({ navigationOptions }) => ({
    title: 'Poems',
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  });

  _showPoem(poemId) {
    this.props.navigation.navigate('PoemScreen', {
      poemId,
    });
  }

  render() {
    const {
      params: { grade },
    } = this.props.navigation.state;
    return (
      <ScrollView>
        <List containerStyle={{ marginTop: 0 }}>
          {poems.map((l) => {
            if (Number(l.grade) === grade) {
              return (
                <ListItem
                  titleStyle={{
                    color: 'rgba(0,0,0,.87)',
                  }}
                  chevronColor="#074e86"
                  key={l._id}
                  title={l.title}
                  onPress={() => {
                    this._showPoem(l._id);
                  }}
                />
              );
            }
            return null;
          })}
        </List>
      </ScrollView>
    );
  }
}

export default PoemSelectionScreen;
