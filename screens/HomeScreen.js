import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Card>
          <Card.Title>ProfileScreen</Card.Title>
          <Card.Divider />

          <Button
            title="ProfileScreen"
            onPress={() => this.props.navigation.navigate('ProfileStack')}
          />
        </Card>
         <View style={styles.buttonSpace}></View>

        <Card>
          <Card.Title>ReduxScreen</Card.Title>
          <Card.Divider />

          <Button
            title="ReduxScreen"
            onPress={() => this.props.navigation.navigate('ReduxScreen')}
          />
        </Card>
         <View style={styles.buttonSpace}></View>

        <Card>
          <Card.Title>HomeScreen</Card.Title>
          <Card.Divider />

          <Button
            title="HomeScreen"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </Card>

        <View style={styles.buttonSpace}></View>

        <Card>
          <Card.Title>MapScreen</Card.Title>
          <Card.Divider />

          <Button
            title="MapScreen"
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
