import React from 'react';
import { View, Text } from 'react-native';

import COLORS from 'src/constants/colors';
import { FONT_FAMILY } from "src/constants/styles";

const NumberBlock = ({
  number,
  description
}) => {
  return <View style={styles.numberBlock}>
    <Text style={styles.number}>{number}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
};

const styles = {
  numberBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 60,
  },
  number: {
    color: COLORS.text.highlight,
    fontSize: 18,
    fontFamily: FONT_FAMILY,
  },
  description: {
    color: COLORS.text.secondary,
    fontSize: 9,
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
  }
};

export default NumberBlock;
