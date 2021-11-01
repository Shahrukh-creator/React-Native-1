import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
class ReducerApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.counter}</Text>
        <View
          style={{
            flexDirection: "row"
          }}>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: 'blue'}}
            onPress={() => this.props.decreaseCounter()}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
          </TouchableOpacity>
          
          <TouchableHighlight
            style={{...styles.button, backgroundColor: 'grey'}}
            onPress={() => this.props.resetCounter()}>
            <Text>Reset</Text>
          </TouchableHighlight>
          

          <TouchableOpacity
            style={{...styles.button, backgroundColor: 'red'}}
            onPress={() => this.props.increaseCounter()}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    resetCounter: () => dispatch({type: 'RESET_COUNTER'}),
  };
}
///mapStateToProps and mapDispatchToProps 
//are connected with ReducerApp to use the props inside him
export default connect(mapStateToProps, mapDispatchToProps)(ReducerApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    fontWeight: "bold"
  },
  button: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  }
});