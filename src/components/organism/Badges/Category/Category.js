import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import badgeData from 'src/mockData/badges';
import Header from 'src/components/molecules/Badges/Header';


const Category = ({
  type,
  data,
}) => {
  return <View>
    <Header type={type} />
  </View>
};

export default Category;