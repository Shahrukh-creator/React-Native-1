import React, { Component } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class AddEmployeeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            age: "",
            loading: false,
            errorMessage: ''
        };
    }

    handleChange = (value, state) => {
        this.setState({ [state]: value })
    }


    addEmployee = async () => {
        // destructure state
        const { name, age, salary } = this.state;
        this.setState({ errorMessage: "", loading: true });
        console.log("FOO", name, age, salary);
        if (name && age && salary) {
           await fetch('http://dummy.restapiexample.com/api/v1/create', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.state.name,
                    salary: this.state.salary,
                    age: this.state.age
                })
            })
                // .then(res => {res.json(),console.log(res)})
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.props.closeModal();
                    this.props.addEmployee({
                        employee_name: res.data.name,
                        employee_age: res.data.age,
                        employee_salary: res.data.salary,
                        id: res.data.id
                    });
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({ errorMessage: "Network Error. Please try again.", loading: false })
                })
        } else {
            this.setState({ errorMessage: "Fields are empty.", loading: false })
        }
    }

    render() {
        const { isOpen, closeModal } = this.props;
        const { loading, errorMessage } = this.state;
        return (
            <Modal
                visible={isOpen}
                onRequestClose={closeModal}
                animationType="slide"
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Add New User</Text>

                    <TextInput
                        style={styles.textBox}
                        onChangeText={(text) => this.handleChange(text, "name")}
                        placeholder="Name" />

                    <TextInput
                        
                        style={styles.textBox}
                        onChangeText={(text) => this.handleChange(text, "salary")}
                        placeholder="email" />
                    <TextInput
                        
                        style={styles.textBox}
                        onChangeText={(text) => this.handleChange(text, "age")}
                        placeholder="city" />

                    {loading ? <Text
                        style={styles.message}>Please Wait...</Text> : errorMessage ? <Text
                            style={styles.message}>{errorMessage}</Text> : null}

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={this.addEmployee}
                            style={{ ...styles.button, marginVertical: 0 }}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={closeModal}
                            style={{ ...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "black" }}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        );
    }
}



export default AddEmployeeModal;

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20
    },
    textBox: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "rgba(0,0,0,0.3)",
        marginBottom: 15,
        fontSize: 18,
        padding: 10
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        borderRadius: 5,
        marginVertical: 20,
        alignSelf: 'flex-start',
        backgroundColor: "black",
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
    message: {
        color: "tomato",
        fontSize: 17
    }
})