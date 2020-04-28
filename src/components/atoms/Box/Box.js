import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from 'src/constants/colors';
import STYLES from 'src/constants/styles';

const Box = ({
  children,
  isAccentBox
}) => {
  const styling = {
    ...styles.box,
    ...isAccentBox && {
      borderTopEndRadius: 30,
      borderBottomStartRadius: 30,
    }
  };
  return <View style={styling}>
    {children}
  </View>
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.background.secondary,
    ...STYLES.shadow,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});

export default Box;