import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';


import badgeData from 'src/mockData/badges';
import PaginationDots from 'src/components/atoms/PaginationDots';
import Category from 'src/components/organism/Badges/Category/Category';

const Badges = () => {
  const allCategories = Object.keys(badgeData);
  const numOfCategories = allCategories.length;
  const [page, setPage] = useState({index: 0, category: allCategories[0]});

  const onSwipeLeft = () => {
    const newPageIndex = page.index+1;
    const index = newPageIndex >= numOfCategories ? 0 : newPageIndex;
    setPage({
      index,
      category: allCategories[index],
    });
  };

  const onSwipeRight = () => {
    const newPageIndex = page.index-1;
    const index = newPageIndex < 0 ? numOfCategories-1 : newPageIndex;
    setPage({
      index,
      category: allCategories[index],
    });
  };

  return <View style={styles.page}>
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
    >
      <PaginationDots
        length={numOfCategories}
        active={page.index}
      />
      <Category category={page.category} />
    </GestureRecognizer>
  </View>
};

const styles = StyleSheet.create({
  page: {
    marginTop: -50,
    zIndex: 2,
  },
});

export default Badges;
