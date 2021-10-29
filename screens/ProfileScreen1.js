import React, { useEffect, useState } from 'react';
import { ActivityIndicator,Button, FlatList, StyleSheet, Text, View } from 'react-native'
import axios from 'axios';
import { Card } from "react-native-elements";

export default function ProfileScreen1({route, navigation }) {


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getdata = async () => {

    const { itemId } = route.params;

    // let itemId = this.props.route.params.itemId;
    console.log(`https://jsonplaceholder.typicode.com/posts/${itemId}`);

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${itemId}`) ///passing id's as destructed value in URL/// 
      .then(response => {
        // handle success
        setData(response.data);
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // always executed
    setLoading(false);

  }
    const updateData = () => {
        setData('');
    }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen 1</Text>
        

        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Card>
                <Card.Title>{data.title}</Card.Title>
                <Card.Divider />

                <Text>
                  <Text style={styles.textSize}>User Id: {data.userId}{"\n"}</Text>
                  
                  <Text style={styles.textSize}>Id: {data.id}{"\n"}</Text>

                  <Text style={styles.textSize}>Title: {data.title}{"\n"}</Text>

                  <Text style={styles.textSize}>Body: {data.body}{"\n"}</Text>
                  
                  {"\n"}
                </Text>

                <Button
                  onPress={() => navigation.navigate('ProfileScreen') }
                  style={styles.buttonStyle}
                  title="BACK TO POST"
                />

              </Card>
        )}

      </View>

    </View>
  )
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
