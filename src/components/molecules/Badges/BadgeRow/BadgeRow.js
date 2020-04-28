import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Badge from 'src/components/atoms/Badge';
import Box from 'src/components/atoms/Box';
import ProgressBar from 'src/components/atoms/ProgressBar';

import STYLES from 'src/constants/styles';

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

  return <View>
    <Box>
      <View style={styles.container}>
        {title && <Text style={styles.boxHeader}>{title}</Text>}
        <View style={styles.badgeContainer}>
          {
            badges && getData().map(badge => {
              const badgeData = showProgress ? badge.badge : badge;
              const progress = showProgress ? (badge.current/badge.total) : 1;
              return <BadgeRowItem
                badgeData={badgeData}
                progress={progress}
                showProgress={showProgress}
              />
            })
          }
        </View>
      </View>
    </Box>
  </View>
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.boxPadding
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