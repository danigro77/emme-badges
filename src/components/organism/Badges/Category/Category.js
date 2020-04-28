import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import badgeData from 'src/mockData/badges';
import Header from 'src/components/molecules/Badges/Header';
import BadgeRow from 'src/components/molecules/Badges/BadgeRow/BadgeRow';

import STYLES from 'src/constants/styles';

const Category = ({
  type,
}) => {
  const {
    recent,
    inProgress,
    previous
  } = badgeData[type];

  return <View>
    <Header type={type} />
    <Text style={styles.info}>Badges won thanks to your {type}!</Text>
    { recent && <BadgeRow badges={recent} limit={3} title="Recent" /> }
    { inProgress && <BadgeRow badges={inProgress} showProgress limit={3} title="In progress" /> }
    { previous && <BadgeRow badges={previous} title="Oldest" /> }
  </View>
};

const styles = StyleSheet.create({
  info: {
    marginVertical: 10,
    marginHorizontal: '5%',
    ...STYLES.fontStyles.text,
    fontWeight: 'bold'
  },
});

export default Category;