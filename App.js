import React from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Icons from 'assets/icons';
import COLORS from 'src/constants/colors';
import ROUTES from 'src/constants/routes'
import STYLES from 'src/constants/styles';

import {
  Home,
  Settings,
  Packs,
  Rx,
  Badges,
} from 'src/scenes';

const Navigation = () => {
  const navigations = [
    {
      key: 'home',
      icon: Icons.home,
      linkTo: ROUTES.HOME,
    },
    {
      key: 'pack',
      icon: Icons.pack,
      linkTo: ROUTES.PACK,
    },
    {
      key: 'badges',
      icon: Icons.badges,
      linkTo: ROUTES.BADGES,
    },
    {
      key: 'rx',
      icon: Icons.rx,
      linkTo: ROUTES.RX,
    },
    {
      key: 'settings',
      icon: Icons.settings,
      linkTo: ROUTES.SETTINGS,
    },
  ];
  return <View style={styles.navigation}>
    {
      navigations.map(nav => {
        return <View key={nav.key}>
          <Link to={nav.linkTo}>
            <Image source={nav.icon} style={styles.navIcon} />
          </Link>
        </View>
      })
    }
  </View>
};

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
  navigation: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    width: '100%',
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.background.primary,
    ...STYLES.shadow
  },
  navIcon: {
    width: 20,
    height: 20
  }
});
