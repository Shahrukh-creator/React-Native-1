import React, { Component } from 'react'
import { ActivityIndicator, FlatList, Button, StyleSheet, View, Text } from 'react-native';
import { Card } from "react-native-elements";

export default class ProfileScreen2 extends Component {
    constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getdata() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getdata();
  }

  render()
  {
    const { data, isLoading } = this.state;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen 2</Text>
       {isLoading ? <ActivityIndicator size="large"/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (

                <Card>
                <Card.Title>{item.username}</Card.Title>
                <Card.Divider />
              <Text>
                  <Text style={styles.textSize}>Id: {item.id}{"\n"}</Text>
                  
                  <Text style={styles.textSize}>name: {item.name}{"\n"}</Text>
                  
                  <Text style={styles.textSize}>Username: {item.username}{"\n"}</Text>

                  <Text style={styles.textSize}>Email: {item.email}{"\n"}</Text>

                  <Text style={styles.textSize}>Company Name: {item.company.name}{"\n"}</Text>
                  
                </Text>
                 </Card>
            )}
          />
        )}

    </View>
  );
  }
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
