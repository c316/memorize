import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Print from 'expo-print';
import constants from '../constants';

export default ({
  title,
  content,
  centered = true,
  iconPosistion = 'top',
  large = true,
}) => (
  <>
    <View style={{ position: 'absolute', right: 0, [iconPosistion]: 0 }}>
      <Icon
        raised
        type="feather"
        name="printer"
        color={constants.colors.cplsRed}
        onPress={() => {
          return Print.printAsync({
            html: `<div style="text-align: ${centered ? 'center' : 'left'};">
                    <h1 style="font-size: 40px;">${title}</h1>
                    <div>
                      <h4 style="font-size: ${
                        large ? '38px;' : '20px;'
                      } font-weight: 500">${content}</h2>
                    </div>
                  </div>`,
          });
        }}
      />
    </View>
  </>
);
