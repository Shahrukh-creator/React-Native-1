import * as React from 'react';
import {Button, View, Text} from 'react-native';

function LogOut({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Log Out Screen</Text>
      <Button
        title="Go to SignIn Screen"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}
export default LogOut;
