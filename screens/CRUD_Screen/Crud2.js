import React, { Component } from 'react'
import { Text, View, StyleSheet,AsyncStorage, Button } from 'react-native'
import { Card } from "react-native-elements";

export default class Crud2 extends Component {
  
constructor()
  {
   super();
    this.state = {
      Updatedname: '',
      Updatedemail: '',
      Updatedcity: '',
    };
    
  }
  componentDidMount()
  {
      this.saveData();
      let code = this.props.route.params.code;
        if(code == 1 )
    {
      this.displayData();
    }
    else
    {}

  }

  
  saveData(){  
    /*let user = "Michal";*/ 

      let name = this.props.route.params.name1;
      let email = this.props.route.params.email1;
      let city = this.props.route.params.city1;
      

      console.log(name);
      console.log(email);
      console.log(city);
     
    let obj = {  
      name: name,  
      email: email,  
      city: city,  
    }  
    /*AsyncStorage.setItem('user',user);*/  
  
    AsyncStorage.setItem('user',JSON.stringify(obj));
     
  }  

  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      let parsed = JSON.parse(user);  
    //   alert(parsed.city + " " +parsed.name + " " + parsed.email);
      this.setState({Updatedname:parsed.name}) 
      this.setState({Updatedemail:parsed.email}) 
      this.setState({Updatedcity:parsed.city}) 
    }  
    catch(error){  
      alert(error)  
    }  
  }  



 async removeItemValue() {
    
    this.setState({Updatedname:''}) 
      this.setState({Updatedemail:''}) 
      this.setState({Updatedcity:''}) 
     let user = await AsyncStorage.getItem('user');
     console.log(user);
    try {
        await AsyncStorage.removeItem(user);
      console.log(user);
    }
    catch(exception) {
        return false;
    }
}

  render() {  
    return (  
      <View style={styles.container}>  

      <Card>
                <Card.Title>User Data</Card.Title>
                <Card.Divider />

                <Text>
                  <Text style={styles.textSize}>Name:  {this.state.Updatedname} {"\n"}</Text>
                  
                  <Text style={styles.textSize}>Email:  {this.state.Updatedemail} {"\n"}</Text>

                  <Text style={styles.textSize}>City:  {this.state.Updatedcity} {"\n"}</Text>
                  
                  {"\n"}
                </Text>
              </Card>

              

        {/* <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>    */}
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
