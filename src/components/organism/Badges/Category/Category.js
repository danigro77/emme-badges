import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { isEmpty } from 'ramda';

import badgeData from 'src/mockData/badges';
import Header from 'src/components/molecules/Badges/Header';
import BadgeRow from 'src/components/molecules/Badges/BadgeRow/BadgeRow';

import STYLES from 'src/constants/styles';

const Category = ({
  category,
}) => {
  const [data, setData] = useState(badgeData[category]);

  const renderDataAvailable = (data) => data && !isEmpty(data);

  useEffect(() => {
    setData(badgeData[category]);
  }, [category]);
  return <View style={styles.category}>
    <Header type={category} />
    <Text style={styles.info}>Badges won thanks to your {category}!</Text>
    { renderDataAvailable(data.recent) && <BadgeRow key='recent' badges={data.recent} limit={3} title="Recent" /> }
    { renderDataAvailable(data.inProgress) && <BadgeRow key='inprogress' badges={data.inProgress} showProgress limit={3} title="In progress" /> }
    { renderDataAvailable(data.previous) && <BadgeRow key='oldest' badges={data.previous} title="Oldest" /> }
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