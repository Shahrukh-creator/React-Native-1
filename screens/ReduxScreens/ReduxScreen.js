import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import ReducerApp from './Reducer'
import { Provider } from 'react-redux'
/**
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */
const initialState = {
    counter: 0
}
/// action is dispatched into the reducer as a parameter to apply changes to state ///
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
        case 'RESET_COUNTER':
            return { counter: 0 }
    }
    return state
}

const store = createStore(reducer)

class ReduxScreen extends Component {

    render() {
        return (
            // Calling Component is wrapped inside
            ///  provider to provide easy access of store states 
            /// to all  called multiple components   
            <Provider store={store}> 
                <ReducerApp />
            </Provider>
        );
    }
}

export default ReduxScreen

// export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});