import  React, {Component} from 'react';
import { ActivityIndicator, FlatList, Button,StyleSheet, View, Text } from 'react-native';
import { Card } from "react-native-elements";

export default class ProfileScreen extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getdata() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
      <Text>Profile Screen</Text>
       {isLoading ? <ActivityIndicator size="large"/> : (
         
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (

              <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />

                <Text>
                  <Text style={styles.textSize}>User Id: {item.userId}{"\n"}</Text>
                  
                  <Text style={styles.textSize}>Id: {item.id}{"\n"}</Text>

                  <Text style={styles.textSize}>Title: {item.body}{"\n"}</Text>
                  {"\n"}
                </Text>

                <Button
                  onPress={() => {
                    this.props.navigation.navigate("ProfileScreen1", {
                      itemId: item.id,
                    });
                  }}
                  style={styles.buttonStyle}
                  title="VIEW DETAILS"
                />
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
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor:'green'
  },
});
