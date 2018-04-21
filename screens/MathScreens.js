import { StackNavigator } from 'react-navigation';

import OperationPicker from '../components/OperationPicker';
import FlashCards from '../components/FlashCards';
import NumberGrid from '../components/NumberGrid';

/* eslint new-cap: "off" */
const MathScreens = StackNavigator({
  OperationPicker: {
    screen: OperationPicker,
    navigationOptions: () => ({
      title: 'Pick an operation',
    }),
  },
  NumberGrid: {
    screen: NumberGrid,
    navigationOptions: () => ({
      title: 'Pick a level',
    }),
  },
  FlashCards: {
    screen: FlashCards,
  },
});

export default MathScreens;
