// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
// // import SignIn from '../SignIn';
// import auth, { firebase } from '@react-native-firebase/auth';

// export default function AuthUser({navigation}) {
//     // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   // const logOut = () => {
//   //     auth()
//   // .signOut()
//   // .then(() => {
//   // Alert.alert('Success ✅', 'Logged Out successfully');
//   //  console.log('User signed out!');
//   //  navigation.navigate('SignIn');
//   // })
//   // }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//        {navigation.navigate('SignIn')} 
//       </View>
//     );
//   }

//   return (
//     <View>
//        {navigation.navigate('Drawer')} 
//       </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   textSize: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: 'black',
//   },
//   buttonText: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//   },
//   buttonSpace: {
//     marginBottom: 20,
//   },
// });
























import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native'
// import SignIn from '../SignIn';
import auth, {firebase} from '@react-native-firebase/auth';

export default function AuthUser({navigation}) {
    // Set an initializing state whilst Firebase connects
    const [authenticated, onChangeAuth] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

 const _isTheUserAuthenticated = () =>
 {
   let userTemp = firebase.auth().currentUser;
   if(userTemp)
   {
     console.log(userTemp);
     onChangeAuth(true);
   }else
   {
     onChangeAuth(false);
   }


 }
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    _isTheUserAuthenticated();
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <View>
    {authenticated 
      ? navigation.navigate('Drawer')
      : navigation.navigate('SignIn') 
    }
    </View>
  );
}

