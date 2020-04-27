import React from 'react';
import { View, Image } from 'react-native';

import Badges from 'assets/badges';

const Badge = ({
  type
}) => {
  return <View>
    <Image
      style={styles.badge}
      source={Badges[type]}
    />
  </View>
};

const styles = {
  badge: {
    width: 100,
    height: 100
  }
};

export default Badge;
