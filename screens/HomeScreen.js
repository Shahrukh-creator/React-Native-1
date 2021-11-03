import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Card>
        <Card.Title>ProfileScreen</Card.Title>
        <Card.Divider />

        <Button
          title="ProfileScreen"
          onPress={() => navigation.navigate('ProfileStack')}
        />
      </Card>
      <View style={styles.buttonSpace}></View>

      <Card>
        <Card.Title>ReduxScreen</Card.Title>
        <Card.Divider />

        <Button
          title="ReduxScreen"
          onPress={() => navigation.navigate('ReduxScreen')}
        />
      </Card>
      <View style={styles.buttonSpace}></View>

      <Card>
        <Card.Title>HomeScreen</Card.Title>
        <Card.Divider />

        <Button
          title="HomeScreen"
          onPress={() => navigation.navigate('Home')}
        />
      </Card>

      <View style={styles.buttonSpace}></View>

      <Card>
        <Card.Title>MapScreen</Card.Title>
        <Card.Divider />

        <Button
          title="MapScreen"
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
