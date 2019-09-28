import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';

const BackgroundImage = (props) => {
  const { children } = props;
  return (
    <ImageBackground
      source={require('../assets/images/circles.png')}
      style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
      imageStyle={{ opacity: 0.1 }}
    >
      {children}
    </ImageBackground>
  );
};

BackgroundImage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BackgroundImage;
