import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { moderateScale, verticalScale } from '../miscFunctions';

const styles = StyleSheet.create({
  centerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
  },
  columnStyle: {
    alignItems: 'center',
  },
});

const BigButton = ({ title, onPress }) => (
  <Button
    title={title}
    titleStyle={{
      fontWeight: '900',
    }}
    textStyle={{
      fontSize: 35,
    }}
    buttonStyle={{
      backgroundColor: '#1c5fa0',
      width: moderateScale(150),
      height: verticalScale(70),
      marginTop: 15,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 5,
      shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: '#000000',
      shadowOffset: { height: 2, width: 0 },
      elevation: 8,
    }}
    containerStyle={{ marginTop: 20 }}
    onPress={onPress}
  />
);

BigButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

class NumberGrid extends React.Component {
  _goToPage = (mathCategory, selectedLevel) => {
    this.props.navigation.navigate('FlashCards', {
      mathCategory,
      selectedLevel,
    });
  };

  render() {
    return (
      <Grid>
        <Row size={6}>
          <Col style={styles.columnStyle}>
            <Row>
              <BigButton
                title="3"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    3
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="5"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    5
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="7"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    7
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="9"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    9
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="11"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    11
                  )
                }
              />
            </Row>
          </Col>
          <Col style={styles.columnStyle}>
            <Row>
              <BigButton
                title="4"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    4
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="6"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    6
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="8"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    8
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="10"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    10
                  )
                }
              />
            </Row>
            <Row>
              <BigButton
                title="12"
                onPress={() =>
                  this._goToPage(
                    this.props.navigation.state.params.mathCategory,
                    12
                  )
                }
              />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

NumberGrid.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        mathCategory: PropTypes.string,
        selectedLevel: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default NumberGrid;
