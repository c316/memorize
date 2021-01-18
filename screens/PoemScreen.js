import React from 'react';
import { ScrollView } from 'react-native';
import PoemHeader from '../components/PoemHeader';
import Poem from '../components/Poem';
import poems from '../assets/poems';
import PrintMe from '../components/PrintMe';

class PoemScreen extends React.Component {
  static navigationOptions = ({ navigationOptions }) => ({
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  });

  render() {
    const { poemId } = this.props.navigation.state.params;
    const poem = poems.find((item) => {
      if (item._id === poemId) {
        return item;
      }
      return null;
    });
    return (
      <>
        <ScrollView style={{ marginBottom: 60 }}>
          <PoemHeader poem={poem} />
          <Poem poem={poem} />
        </ScrollView>
        <PrintMe
          title={`${poem.title}
          <div>${poem.author}</div>
        `}
          content={poem.poem}
          iconPosistion="bottom"
        />
      </>
    );
  }
}

export default PoemScreen;
