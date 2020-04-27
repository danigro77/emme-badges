import React from 'react';
import { View, Image } from 'react-native';

import Categories from 'assets/categories';
import COLORS from 'src/constants/colors';

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
    backgroundColor: COLORS.background.highlightSecondary,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: COLORS.border.secondary,
    borderWidth: 3
  }
};

export default CategoryIcon;
