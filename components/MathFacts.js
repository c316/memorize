import React from 'react';
import { Platform, View, StyleSheet, ScrollView, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class MathFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMath: false };
  }

  _goToPage = name => {
    this.props.navigation.navigate(name);
  };

  render() {
    const list = [
      {
        title: 'Addition',
        icon: 'plus',
        type: 'font-awesome',
      },
      {
        title: 'Subtraction',
        icon: 'minus',
        type: 'font-awesome',
      },
      {
        title: 'Multiplication',
        icon: 'times',
        type: 'font-awesome',
      },
      {
        title: 'Division',
        icon: 'division',
        type: 'material-community',
      },
    ];
    return (
      <View>
        <List style={{ marginTop: 0 }}>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ type: item.type || null, name: item.icon }}
              onPress={() => this._goToPage(item.title)}
            />
          ))}
        </List>
      </View>
    );
  }
}

export default MathFacts;
