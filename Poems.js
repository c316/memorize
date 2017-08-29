import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { poems } from './assets/poems';
import Poem from './Poem';

class Poems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showPoems: false, grade: 0, poem: null};
  }

  _showPoemsForGrade(grade){
    this.setState({grade: grade, showPoems: true});
  }

  _clearGradeState() {
    this.setState({showPoems: false});
  }

  _showPoem(_id){
    this.setState({poem: _id});
  }

  _clearPoemState() {
    this.setState({poem: null});
  }

  render(){
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
    let grade = this.state.grade;

    return(
      <View>
        {
          this.state.showPoems ? ( this.state.poem ? <Poem poem={this.state.poem} onPress={() => {this._clearPoemState()}}/> :
            <ScrollView>
                <List>
                  <ListItem
                    key={"back"}
                    title="Go back"
                    hideChevron={true}
                    leftIcon={{name: 'chevron-left'}}
                    onPress={() => {this._clearGradeState()}}
                  />
                  {
                    poems.map((l, i) => {
                      if (Number(l.grade) === grade) {
                        return <ListItem
                          key={l._id}
                          title={l.title}
                          onPress={() => {this._showPoem(l._id)}}
                        />
                      }
                    })
                  }
              </List>
            </ScrollView>):
            <List containerStyle={{marginBottom: 20}}>
              {
                list.map((l, i) => (
                  <ListItem
                    key={i}
                    title={l.name}
                    leftIcon={{name: l.icon ? l.icon : null, type: l.type ? l.type : null}}
                    onPress={() => {this._showPoemsForGrade(l.grade)}}
                  />
                ))
              }
            </List>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    height: "100%"
  }
});


export default Poems;