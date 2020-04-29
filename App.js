import React from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Navigation from './src/components/molecules/App/Navigation';

import COLORS from 'src/constants/colors';
import ROUTES from 'src/constants/routes'

import {
  Home,
  Settings,
  Packs,
  Rx,
  Badges,
} from 'src/scenes';

export default function App() {
  return (
    <NativeRouter>
        <View style={styles.app}>
          <ScrollView contentContainerStyle={styles.scrolling}>
            <View style={styles.container}>
              <View style={styles.top} />
              <View style={styles.body}>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.PACK} component={Packs} />
                <Route path={ROUTES.RX} component={Rx} />
                <Route path={ROUTES.SETTINGS} component={Settings} />
                <Route path={ROUTES.BADGES} component={Badges} />
              </View>
            </View>
          </ScrollView>
          <Navigation />
        </View>
  </NativeRouter>
);
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  scrolling: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: COLORS.background.primary,
    alignItems: 'center',
    color: COLORS.text.primary,
    marginBottom: 60
  },
  container: {
    flex:1,
    alignSelf: 'stretch',
  },
  top: {
    backgroundColor: COLORS.background.highlightPrimary,
    height: 150,
    alignSelf: 'stretch',
    zIndex: 0
  },
  body: {
    alignSelf: 'center',
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
    backgroundColor: COLORS.background.primary,
    zIndex: 0
  },
});
