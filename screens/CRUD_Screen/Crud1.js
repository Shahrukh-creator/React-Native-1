// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StatusBar,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const STORAGE_KEY = '@save_name';

// class CrudScreen extends Component {
//   state = {
//     text: '',
//     name: '',
//   };

//   componentDidMount() {
//     this.readData();
//   }

//   readData = async () => {

//     try {
//       const name = await AsyncStorage.getItem(STORAGE_KEY);

//       if (name !== null) {
//         this.setState({name});
//       }
//     } catch (e) {
//       alert('Failed to load name.');
//     }
//   };

//   const someObject = { name1: "Dave" };

//   saveData = async name => {
//     try {
//       await AsyncStorage.setItem(STORAGE_KEY, name);
//       alert('Data successfully saved!');
//       this.setState({name});
//     } catch (e) {
//       alert('Failed to save name.');
//     }
//   };

//   removeData = async () => {
//     try {
//       await AsyncStorage.clear();
//       alert('Storage successfully cleared!');
//       this.setState({name: 'world'});
//     } catch (e) {
//       alert('Failed to clear the async storage.');
//     }
//   };

//   onChangeText = text => this.setState({text});

//   onSubmitEditing = () => {
//     const onSave = this.saveData;
//     const {text} = this.state;

//     if (!text) return;

//     onSave(text);
//     this.setState({text: ''});
//   };
//   render() {
//     const {text, name} = this.state;
//     return (
//       <>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView style={styles.container}>
//           <TextInput
//             style={styles.input}
//             value={text}
//             placeholder="Type your name, hit enter, and refresh"
//             placeholderTextColor="#fff"
//             onChangeText={this.onChangeText}
//             onSubmitEditing={this.onSubmitEditing}
//           />
//           <Text style={styles.text}>{name}!</Text>
//           <TouchableOpacity onPress={this.removeData} style={styles.button}>
//             <Text style={styles.buttonText}>Clear Storage</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </>
//     );
//   }

//   // ... rest of the component
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28D6C0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 20,
//     padding: 10,
//     backgroundColor: '#f12b7e',
//   },
//   input: {
//     padding: 15,
//     height: 50,
//     fontSize: 20,

//     borderBottomWidth: 1,
//     borderBottomColor: '#333',
//     margin: 10,
//   },
//   button: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#f89221',
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

// export default CrudScreen;



























import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,Button
} from 'react-native';

export default class Crud1 extends Component<Props> {

  constructor()
  {
   super();
    this.state = {
      name: '',
      email: '',
      city: '',
    };
    
  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          placeholder="Enter Name"
          placeholderTextColor="#fff"
          onChangeText={(text) => this.setState({name:text})}
        />

         <TextInput
          style={styles.input}
          value={this.state.email}
          placeholder="Enter Email"
          placeholderTextColor="#fff"
          onChangeText={(text) => this.setState({email:text})}
        />

         <TextInput
          style={styles.input}
          value={this.state.city}
          placeholder="Enter City"
          placeholderTextColor="#fff"
          onChangeText={(text) => this.setState({city:text})}  
        />

        <Button
                 onPress={() => {
                    this.props.navigation.navigate("Crud2", {
                      name1: this.state.name,
                      email1: this.state.email,
                      city1: this.state.city,
                      code: 1
                    });
                  }}
                  style={styles.buttonStyle}
                  title="Add"
                />

                 <Button
                 onPress={() => {
                    this.props.navigation.navigate("Crud2", {
                      name1: this.state.name,
                      email1: this.state.email,
                      city1: this.state.city,
                      code: 2
                    });
                  }}
                  style={styles.buttonStyle}
                  title="Delete"
                />



      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28D6C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 15,
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 10,
  },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
   buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor:'green'
  },
});














































// import React, { Component } from 'react'
// import { Text, View,  Button, AsyncStorage, TextInput } from 'react-native'

// export default class Crud1 extends Component {

  
//   state = {
//     arr: [],
//      id: 0,
//     text:'',
//     item:[
//       {
//         id:1,
//         data:"Loading"
//       }
//     ]
//   }

//   storedata = async  () =>
//   {
//     this.arr.push({id: this.id, data:this.state.text})
//     this.id++
//     await AsyncStorage.setItem('myList',JSON.stringify(this.arr));

//     this.setState({
//       item: JSON.parse(await AsyncStorage.getItem('myList'))
//     })
    
  

//   }
//   render() {
//     return (
//       <View>
//       <TextInput
//           value={this.state.text}
//           placeholder="Enter Item"
//           placeholderTextColor="#fff"
//           onChangeText={(text) => this.setState({text})}  
//         />
//         <Button
//         onPress ={this.storedata}
//         title = "Add">
//           Add todo
//         </Button>
//         <Text>{this.state.item[0].data}</Text>
//       </View>
//     )
//   }
// }









































// import React, { useState } from "react";
// import {
//   Button,
//   Alert,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   FlatList,
//   Modal,
//   Pressable,
// } from "react-native";
// import { Card } from "react-native-elements";
// class Crud extends React.Component {
//   state = {
//     loading: true,
//     posts: [],
//     modalVisible: false,
//     user: { name: "", profession: "", id: "" },
//     currUserName: "",
//     currUserProfession: "",
//     currUserId: "",
//   };

//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   };

//   async getMovies() {
//     try {
//       const response = await fetch("http://10.0.2.2:8080/listUsers");
//       const json = await response.json();
//       this.setState({ posts: json.data });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   async deleteUser(id) {
//     try {
//       this.setState({ loading: true });
//       const response = await fetch("http://10.0.2.2:8080/deleteUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ userId: id }),
//       });
//       const json = await response.json();
//       console.log(json);

//       this.setState({ posts: json.data });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   async createUser(newUser) {
//     try {
//       // this.setState({ loading: true });
//       const response = await fetch("http://10.0.2.2:8080/createUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ user: newUser }),
//       });
//       const json = await response.json();
//       console.log(json);

//       this.setState({ posts: json.data });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   async updateUser(updatedUser) {
//     try {
//       this.setState({ loading: true });
//       const response = await fetch("http://10.0.2.2:8080/updateUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ userId: updatedUser.id, user: updatedUser }),
//       });
//       const json = await response.json();
//       console.log(json);

//       this.setState({ posts: json.data });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   componentDidMount() {
//     this.getMovies();
//   }

//   render() {
//     return (
//       <View style={[]}>
//         {this.state.loading ? (
//           <ActivityIndicator size="large" color="#00ff00" />
//         ) : (
//           <FlatList
//             horizontal
//             data={this.state.posts}
//             keyExtractor={({ id }) => id}
//             renderItem={({ item }) => (
//               <Card>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Divider />
//                 <Card.Title>{item.profession}</Card.Title>
//                 <Button
//                   onPress={() => {
//                     this.setState({ user: item });
//                     this.setModalVisible(true);
//                     this.setState({ currUserId: item.id });

//                     this.setState({ currUserName: item.name });
//                     this.setState({ currUserProfession: item.profession });
//                   }}
//                   title="Edit"
//                 />
//                 <View style={styles.space} />
//                 <Button
//                   onPress={() => {
//                     this.deleteUser(item.id);
//                   }}
//                   title="Delete"
//                 />
//               </Card>
//             )}
//           />
//         )}
//         <View style={styles.buttonStyleNew}>
//           <Button
//             title="Create"
//             onPress={() => {
//               var noUser = { name: "", profession: "", id: "" };
//               this.setState({ user: noUser });
//               this.setModalVisible(true);
//               this.setState({ currUserId: noUser.id });

//               this.setState({ currUserName: noUser.name });
//               this.setState({ currUserProfession: noUser.profession });
//             }}
//           />
//         </View>

//         <View style={styles.container}>
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={this.state.modalVisible}
//             onRequestClose={() => {
//               Alert.alert("Modal has been closed.");
//               this.setModalVisible(!this.state.modalVisible);
//             }}
//           >
//             <View style={styles.centeredView}>
//               <View style={styles.modalView}>
//                 <TextInput
//                   onChangeText={(text) => {
//                     this.setState({ currUserName: text });
//                   }}
//                   style={styles.textInput}
//                   placeholder={this.state.user.name}
//                 ></TextInput>
//                 <TextInput
//                   onChangeText={(text) => {
//                     this.setState({ currUserProfession: text });
//                   }}
//                   style={styles.textInput}
//                   placeholder={this.state.user.profession}
//                 ></TextInput>
//                 <Pressable
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => {
//                     var updatedUser = {
//                       id: this.state.currUserId,
//                       name: this.state.currUserName,
//                       profession: this.state.currUserProfession,
//                     };
//                     if (this.state.currUserId) {
//                       this.updateUser(updatedUser);
//                     } else {
//                       this.createUser(updatedUser);
//                     }

//                     this.setModalVisible(!this.state.modalVisible);
//                   }}
//                 >
//                   <Text style={styles.textStyle}>Update</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   SignUp: {
//     alignSelf: "stretch",
//   },
//   header: {
//     fontSize: 24,
//     paddingBottom: 10,
//     marginBottom: 40,
//     borderBottomColor: "#000000",
//     borderBottomWidth: 2,
//   },
//   space: {
//     width: 20, // or whatever size you need
//     height: 20,
//   },
//   textInput: {
//     alignSelf: "stretch",
//     height: 40,
//     marginBottom: 30,
//     borderBottomColor: "#000000",
//     borderBottomWidth: 2,
//   },
//   text: {
//     fontSize: 10,
//     paddingBottom: 10,
//     marginBottom: 20,
//     borderBottomColor: "#000000",
//     borderBottomWidth: 1,
//   },
//   error: {
//     fontSize: 10,
//     paddingBottom: 1,
//     marginTop: -30,
//     borderBottomColor: "#ff0000",
//     borderBottomWidth: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   horizontal: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10,
//   },
//   buttonStyle: {
//     borderRadius: 0,
//     marginLeft: 0,
//     marginRight: 0,
//     marginBottom: 0,
//   },
//   buttonStyleNew: {
//     borderRadius: 0,
//     marginLeft: 0,
//     marginRight: 0,
//     marginBottom: 0,
//     marginTop: 50,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });

// export default Crud;





































