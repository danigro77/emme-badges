import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import STYLES from 'src/constants/styles';

import Box from 'src/components/atoms/Box';
import BadgeRowItem from "./BadgeRowItem";

const BadgeRow = ({
  badges,
  limit,
  showProgress,
  title,
}) => {
  const getData = () => {
    if (limit) return badges.slice(0, limit);
    return badges;
  };

  return <Box>
    <View style={styles.container}>
      {title && <Text style={styles.boxHeader}>{title}</Text>}
      <View style={styles.badgeContainer}>
        {
          badges && getData().map(badge => {
            const badgeData = showProgress ? badge.badge : badge;
            const progress = showProgress ? (badge.current/badge.total) : 1;
            return <BadgeRowItem
              key={`${badgeData.type}-${Math.random()}`}
              badgeData={badgeData}
              progress={progress}
              showProgress={showProgress}
            />
          })
        }
      </View>
    </View>
  </Box>
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.boxPadding,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  boxHeader: {
    ...STYLES.fontStyles.text
  }
});

export default BadgeRow;