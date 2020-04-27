import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import COLORS from 'src/constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
    alignItems: 'center',
  },
  top: {
    backgroundColor: COLORS.background.highlightPrimary,
    height: 150,
    alignSelf: 'stretch'
  }
});
