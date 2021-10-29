import React, { useEffect, useState } from 'react';
import { ActivityIndicator,Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card } from "react-native-elements";


export default function ProfileScreen({ navigation }) {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getdata = async () => {
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
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
                    navigation.navigate("ProfileScreen1", {
                      itemId: item.id,
                    });
                  }}
                  style={styles.buttonStyle}
                  title="VIEW POSTS"
                />
              </Card>
          )}
        />
      )}
    </View>
  );
};


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
