import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import strings from '../localization/LocalizedStrings';
import {setLng, getLng} from '../helper/changeLng';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

    
  componentDidMount(){
    this.selectedLng();
  }

   selectedLng = async () => {
    const lngData = await getLng();
    if (!!lngData) {
      strings.setLanguage(lngData);
    }
    console.log('selected Language data==>>>', lngData);
    // let str1 = strings.CASE_UPDATE;
    // console.log(str1);
  };


  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Card>
          <Card.Title>{strings.PROFILE_SCREEN_SHORT}</Card.Title>
          <Card.Divider />

          <Button
            title={strings.PROFILE_SCREEN_SHORT}
            onPress={() => this.props.navigation.navigate('ProfileStack')}
          />
        </Card>
         <View style={styles.buttonSpace}></View>

        <Card>
          <Card.Title>{strings.MAPSCREEN_SHORT}</Card.Title>
          <Card.Divider />

          <Button
            title={strings.MAPSCREEN_SHORT}
            onPress={() => this.props.navigation.navigate('MapView')}
          />
        </Card>

        <View style={styles.buttonSpace}></View>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  buttonSpace: {
    marginBottom: 20,
  },
});
