
class MathScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Math',
    tabBarIcon: () => <Icon name="add" color="#5A95FF" size={20} />,
  };
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
      answer: '',
      numerator: '',
      denomenator: '',
      operation: '+',
      mathCategory: 'Addition',
      selectedLevel: 3,
      selectedNumberIndex: 0,
      mode: 0,
    };
  }

  componentWillMount() {
    this.generateNewProblem();
  }
