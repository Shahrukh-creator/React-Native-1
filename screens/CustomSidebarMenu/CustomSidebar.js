import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import CurrentUser from '../AuthScreens/AuthUserStack/CurrentUser';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const CustomSidebarMenu = props => {
  const BASE_PATH =
    'https://previews.123rf.com/images/zrestudiorus/zrestudiorus1610/zrestudiorus161000006/66876109-profile-icon-male-avatar-man-hipster-style-fashion-cartoon-guy-beard-glasses-portrait-casual-person-.jpg';

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image source={{uri: BASE_PATH}} style={styles.sideMenuProfileIcon} />
      <CurrentUser />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 120,
    height: 120,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default CustomSidebarMenu;
