import React from 'react';
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

const BigButton = ({ title }) => (
  <Button
    title={title}
    titleStyle={{
      fontWeight: '900',
    }}
    textStyle={{ fontSize: 35 }}
    buttonStyle={{
      backgroundColor: '#a1002b',
      width: moderateScale(150),
      height: verticalScale(70),
      marginTop: 15,
    }}
    containerStyle={{ marginTop: 20 }}
  />
);

const WideButton = ({ title }) => (
  <Button
    title={title}
    titleStyle={{
      fontWeight: '900',
    }}
    textStyle={{ fontSize: 30 }}
    buttonStyle={{
      backgroundColor: '#a1002b',
      minWidth: '100%',
      minHeight: '100%',
      marginBottom: 10,
    }}
    containerStyle={{ marginBottom: 10 }}
  />
);

const NumberGrid = () => (
  <Grid>
    <Row size={6}>
      <Col style={styles.columnStyle}>
        <Row>
          <Col>
            <BigButton title="4" />
          </Col>
        </Row>
        <Row>
          <BigButton title="6" />
        </Row>
        <Row>
          <BigButton title="8" />
        </Row>
        <Row>
          <BigButton title="10" />
        </Row>
      </Col>
      <Col style={styles.columnStyle}>
        <Row>
          <BigButton title="5" />
        </Row>
        <Row>
          <BigButton title="7" />
        </Row>
        <Row>
          <BigButton title="9" />
        </Row>
        <Row>
          <BigButton title="11" />
        </Row>
      </Col>
    </Row>
    <Row size={1}>
      <WideButton title="12" />
    </Row>
  </Grid>
);

export default NumberGrid;