import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  fontStyles,
  circle
} from 'src/constants/styles';

const Home = () => {
  return <View style={styles.page}>
    <View style={styles.badge}>
      <Text style={styles.header}>Home</Text>
    </View>
  </View>
};

const styles = StyleSheet.create({
  page: {
    marginTop: -50,
  },
  header: {
    ...fontStyles.header
  },
  badge: {
    ...circle
  }
});

export default Home;