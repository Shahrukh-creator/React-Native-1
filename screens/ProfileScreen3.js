import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Button,
  View,
  Text,
  Image,
} from 'react-native';
import {Card} from 'react-native-elements';

export default class ProfileScreen3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getdata() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos',
      );
      const json = await response.json();
      this.setState({data: json});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    this.getdata();
  }

  render() {
    const {data, isLoading} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen 3</Text>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View>
                <Card>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Divider />
                  <Text>
                    <Text style={styles.textSize}>
                      Album Id: {item.albumId}
                      {'\n'}
                    </Text>

                    <Text style={styles.textSize}>
                      Id: {item.id}
                      {'\n'}
                    </Text>

                    <Text style={styles.textSize}>
                      Title: {item.title}
                      {'\n'}
                    </Text>
                  </Text>
                  <Image
                    style={{height: 50, width: 50}}
                    source={{uri: item.url}}></Image>
                  <Image
                    style={{height: 100, width: 100}}
                    source={{uri: item.thumbnailUrl}}></Image>
                </Card>
              </View>
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
