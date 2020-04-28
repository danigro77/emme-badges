import React from 'react';
import { View, Image } from 'react-native';

import Categories from 'assets/categories';
import COLORS from 'src/constants/colors';

import {
  circle
} from 'src/constants/styles';

const CategoryIcon = ({
  type
}) => {
  return <View>
    <Image
      style={styles.badge}
      source={Categories[type]}
    />
  </View>
};

const styles = {
  badge: {
    ...circle
  }
};

export default CategoryIcon;
