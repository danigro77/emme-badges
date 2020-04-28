import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper'

import badgeData from 'src/mockData/badges';
import Category from 'src/components/organism/Badges/Category/Category';

const Badges = () => {
  return <Swiper paginationStyle={styles.swiper}>
    {
      Object.keys(badgeData).map((type) => {
        return <View style={styles.page} key={type}>
          <Category
            type={type}
          />
        </View>
      })
    }
  </Swiper>
};

const styles = StyleSheet.create({
  swiper: {
    top: -700,
    right: 0,
  },
  page: {

  }
});

export default Badges;
