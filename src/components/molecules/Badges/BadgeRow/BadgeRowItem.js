import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Badge from 'src/components/atoms/Badge';
import ProgressBar from 'src/components/atoms/ProgressBar';

import STYLES from 'src/constants/styles';


const BadgeRowItem = ({
  badgeData,
  showProgress,
  progress,
}) => {
  return <View style={styles.badgeItem}>
    <Badge type={badgeData.type} />
    <Text style={styles.name}>{badgeData.name}</Text>
    <Text style={styles.text}>{badgeData.subText}</Text>
    {showProgress && <ProgressBar progress={progress} />}
  </View>
};

const styles = StyleSheet.create({
  badgeItem: {
    maxWidth: 90,
    alignItems: 'center',
    marginHorizontal: 3,
  },
  name: {
    ...STYLES.fontStyles.text,
    fontSize: 10
  },
  text: {
    ...STYLES.fontStyles.subtext
  }
});

export default BadgeRowItem;