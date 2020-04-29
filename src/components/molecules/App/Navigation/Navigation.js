import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Link } from 'react-router-native';

import Icons from 'assets/icons';
import COLORS from 'src/constants/colors';
import ROUTES from 'src/constants/routes'
import STYLES from 'src/constants/styles';


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

const styles = StyleSheet.create({
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

export default Navigation;