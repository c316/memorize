import React from 'react';
import { ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import poems from '../assets/poems';

class PoemSelectionScreen extends React.Component {
  static navigationOptions = ({ navigationOptions }) => ({
    title: 'Poems ',
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
        {poems.map((l) => {
          if (Number(l.grade) === grade) {
            return (
              <ListItem
                key={l._id}
                onPress={() => {
                  this._showPoem(l._id);
                }}
              >
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      color: '#25265E',
                    }}
                  >
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
                <Icon
                  type="font-awesome-5"
                  name="chevron-right"
                  color="#4A4A4A"
                />
              </ListItem>
            );
          }
          return null;
        })}
      </ScrollView>
    );
  }
}

export default PoemSelectionScreen;
