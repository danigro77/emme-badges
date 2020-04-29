import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CategoryIcon from 'src/components/atoms/CategoryIcon';
import Box from 'src/components/atoms/Box';
import NumberBlock from 'src/components/atoms/NumberBlock';

import COLORS from 'src/constants/colors';
import STYLES from 'src/constants/styles';

import badgeData from 'src/mockData/badges';

const Header = ({
  type
}) => {
  const data = badgeData[type] || {};
  const {
    currentStreakDays,
    longestStreak,
    totalBadges,
    description
  } = data;
  return <View style={styles.header}>
    <Box isAccentBox>
      <CategoryIcon type={type} style={styles.icon} />
      <View style={styles.headerText}>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.numbers}>
          <NumberBlock number={currentStreakDays} description='Current day streak' />
          <NumberBlock number={longestStreak} description='Longest streak' />
          <NumberBlock number={totalBadges} description='Total badges' />
        </View>
      </View>
    </Box>
  </View>
};

const styles = StyleSheet.create({
  header: {
    marginTop: -20,
    zIndex: 1
  },
  headerText: {
    ...STYLES.boxPadding
  },
  descriptionBox: {
    borderColor: COLORS.border.primary,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10
  },
  description: {
    ...STYLES.fontStyles.text,
    textAlign: 'center',
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Header;