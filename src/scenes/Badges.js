import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import badgeData from 'src/mockData/badges';

import Category from 'src/components/organism/Badges/Category';
import PaginationSwiper from 'src/components/atoms/PaginationSwiper';

const Badges = () => {
  const allCategories = Object.keys(badgeData);
  const numOfCategories = allCategories.length;
  const [category, setCategory] = useState(allCategories[0]);

  return <View style={styles.page}>
    <PaginationSwiper
      numOfPages={numOfCategories}
      onSwipe={(index) => setCategory(allCategories[index])}
    >
      <Category category={category} />
    </PaginationSwiper>
  </View>
};

const styles = StyleSheet.create({
  page: {
    marginTop: -10,
    zIndex: 2,
  },
});

export default Badges;
