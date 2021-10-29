import  React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component  {

  constructor(props) {
    super(props);
  }

  render()
  {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to ProfileScreen"
        onPress={() => this.props.navigation.navigate('ProfileStack')}
      />
      <Button
        title="Go to HomeScreen"
        onPress={() => this.props.navigation.navigate('Home')}
      />
    </View>
  );
  }
}
export default HomeScreen;
