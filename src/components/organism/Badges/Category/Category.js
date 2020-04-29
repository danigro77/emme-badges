import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import badgeData from 'src/mockData/badges';
import Header from 'src/components/molecules/Badges/Header';
import BadgeRow from 'src/components/molecules/Badges/BadgeRow/BadgeRow';

import { dataAvailable } from 'src/utils/data'

import STYLES from 'src/constants/styles';

const Category = ({
  category,
}) => {
  const [data, setData] = useState(badgeData[category]);

  useEffect(() => {
    setData(badgeData[category]);
  }, [category]);
  return <View style={styles.category}>
    <Header type={category} />
    <Text style={styles.info}>Badges won thanks to your {category}!</Text>
    { dataAvailable(data.recent) && <BadgeRow key='recent' badges={data.recent} limit={3} title="Recent" /> }
    { dataAvailable(data.inProgress) && <BadgeRow key='in-progress' badges={data.inProgress} showProgress limit={3} title="In progress" /> }
    { dataAvailable(data.previous) && <BadgeRow key='oldest' badges={data.previous} title="Oldest" /> }
  </View>
};

const styles = StyleSheet.create({
  category: {
    overflow: 'visible'
  },
  info: {
    marginVertical: 10,
    marginHorizontal: '5%',
    ...STYLES.fontStyles.text,
    fontWeight: 'bold'
  },
});

export default Category;