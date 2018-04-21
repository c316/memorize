import React from 'react';
import { Platform, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { poems } from '../assets/poems';
import Poem from './Poem';

class Poems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPoems: false, grade: 0, poem: null };
  }

  _showPoemsForGrade(grade) {
    this.setState({ grade, showPoems: true });
  }

  _clearGradeState() {
    this.setState({ showPoems: false });
  }

  _showPoem(_id) {
    this.setState({ poem: _id });
  }

  _clearPoemState() {
    this.setState({ poem: null });
  }

  render() {
    const list = [
      {
        name: 'Kindergarten',
        grade: 0,
      },
      {
        name: 'First Grade',
        icon: 'numeric-1-box',
        type: 'material-community',
        grade: 1,
      },
      {
        name: 'Second Grade',
        icon: 'numeric-2-box',
        type: 'material-community',
        grade: 2,
      },
      {
        name: 'Third Grade',
        icon: 'numeric-3-box',
        type: 'material-community',
        grade: 3,
      },
      {
        name: 'Fourth Grade',
        icon: 'numeric-4-box',
        type: 'material-community',
        grade: 4,
      },
      {
        name: 'Fifth Grade',
        icon: 'numeric-5-box',
        type: 'material-community',
        grade: 5,
      },
      {
        name: 'Sixth Grade',
        icon: 'numeric-6-box',
        type: 'material-community',
        grade: 6,
      },
      {
        name: 'Seventh Grade',
        icon: 'numeric-7-box',
        type: 'material-community',
        grade: 7,
      },
      {
        name: 'Eighth Grade',
        icon: 'numeric-8-box',
        type: 'material-community',
        grade: 8,
      },
    ];
    const { grade } = this.state;

    const firstCondition = () => {
      if (this.state.poem) {
        return (
          <Poem
            poem={this.state.poem}
            onPress={() => {
              this._clearPoemState();
            }}
          />
        );
      }
      return (
        <ScrollView style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }}>
          <List style={{ marginTop: 0 }}>
            <ListItem
              key="back"
              title="Go back"
              hideChevron
              leftIcon={{ name: 'chevron-left' }}
              onPress={() => {
                this._clearGradeState();
              }}
            />
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
    };

    const secondCondition = () => (
      <List
        style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }}
        containerStyle={{ marginTop: 0 }}
      >
        {list.map((l, i) => (
          <ListItem
            titleStyle={{
              color: 'rgba(0,0,0,.87)',
            }}
            chevronColor="#074e86"
            key={i}
            title={l.name}
            leftIcon={{
              name: l.icon ? l.icon : null,
              type: l.type ? l.type : null,
              color: '#074e86',
            }}
            onPress={() => {
              this._showPoemsForGrade(l.grade);
            }}
          />
        ))}
      </List>
    );

    return (
      <View>{this.state.showPoems ? firstCondition() : secondCondition()}</View>
    );
  }
}

export default Poems;
