import React from 'react';
import PoemHeader from '../components/PoemHeader';
import Poem from '../components/Poem';
import poems from '../assets/poems';

class PoemScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Select a Grade',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    const { poemId } = this.props.navigation.state.params;
    const poem = poems.find((item) => {
      if (item._id === poemId) {
        return item;
      }
      return null;
    });
    return (
      <React.Fragment>
        <PoemHeader poem={poem} />
        <Poem poem={poem} />
      </React.Fragment>
    );
  }
}

export default PoemScreen;
