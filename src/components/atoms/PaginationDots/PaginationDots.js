import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from 'src/constants/colors';
import STYLES from 'src/constants/styles';

const Dot = ({isActive}) => {
  return <View styles={isActive ? styles.activeDot : styles.passiveDot}/>
};

const PaginationDots = ({length, active}) => {
  return <View styles={styles.dotRow}>
    {
       new Array(length).map((_, index) => {
         return <Dot isActive={active === index} key={`dot-${index}`} />
       })
    }
  </View>
};



const styles = StyleSheet.create({
  activeDot: {
    ...STYLES.dotStyle,
    backgroundColor: COLORS.paginationDot,
  },
  passiveDot: {
    ...STYLES.dotStyle,
  },
  dotRow: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: 20
  }
});

export default PaginationDots;