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
