import React, { useEffect, useState } from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import { setLng, getLng } from '../helper/changeLng';
import strings from '../localization/LocalizedStrings';
import CurrentUser from './AuthScreens/AuthUserStack/CurrentUser';

function HomeScreen({navigation}) {

  useEffect(() => {
    selectedLng()
  }, [])

  const selectedLng = async () => {
    const lngData = await getLng()
    if (!!lngData) {
      strings.setLanguage(lngData)
    }
    console.log("selected Language data==>>>", lngData);
    // let str1 = strings.CASE_UPDATE;
    // console.log(str1);
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
      <Card>
        <Card.Title>{strings.PROFILE_SCREEN_SHORT}</Card.Title>
        <Card.Divider />

        <Button
          title={strings.PROFILE_SCREEN_SHORT}
          onPress={() => navigation.navigate('ProfileStack')}
        />
      </Card>
      <View style={styles.buttonSpace}></View>


      <Card>
        <Card.Title>{strings.MAPSCREEN_SHORT}</Card.Title>
        <Card.Divider />

        <Button
          title={strings.MAPSCREEN_SHORT}
          onPress={() => navigation.navigate('MapView')}
        />
      </Card>

      <View style={styles.buttonSpace}></View>

    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  buttonSpace: {
    marginBottom: 20,
  },
});
