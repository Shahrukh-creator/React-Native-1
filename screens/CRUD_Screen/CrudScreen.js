import {
  Alert,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLng, getLng } from '../../helper/changeLng';
import strings from '../../localization/LocalizedStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CrudScreen() {
    const [firstname, setfirstname] = React.useState('');

    
  const SubmitData = async () => {
         /// Insert In Async Storage
         try {
          await AsyncStorage.setItem('email', email);
          
         }
         catch (e){
          console.error(e);
         }
  }
        

            
  const RetrieveData = async () => {
         
         /// Retrieve from Async Storage
         try {
         const Value1 = await AsyncStorage.getItem('email')
         console.log(Value1);
         console.log(Value2);
         console.log(Value3);
         console.log(Value4);
         }  catch (e){
          console.error(e);
         }
         
         

     
       



      setfirstname('');
      setlastname('');
      setemail('');
      setpassword('');
    }



    return (
        <View>
            <Text></Text>
        </View>
    )
}
