import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

import COLORS from 'src/constants/colors';

const ProgressBar = ({progress}) => {
  return <View style={styles.progress}>
    <Progress.Bar
      progress={progress}
      width={80}
      unfilledColor={COLORS.progress.unfilled}
      borderColor={COLORS.progress.border}
      color={COLORS.progress.filled}
    />
  </View>
};

const styles = StyleSheet.create({
  progress: {
    marginTop: 5
  },
});

export default ProgressBar;