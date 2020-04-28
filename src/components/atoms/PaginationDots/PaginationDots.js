import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dots from 'react-native-dots-pagination';

import COLORS from 'src/constants/colors';

const PaginationDots = ({length, active}) => {
  return <Dots
    length={length}
    active={active}
    activeDotWidth={11}
    activeDotHeight={11}
    activeColor={COLORS.pagination.active}
    passiveDotWidth={10}
    passiveDotHeight={10}
    passiveColor={COLORS.pagination.passive}
  />
};

const styles = StyleSheet.create({
  dots: {
  },
});

export default PaginationDots;