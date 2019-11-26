
import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity,
    ScrollView, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons';


export default class MenuToChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            discription: "",
        };
    }

    handleSubmit = () => {
        // fetch("http://my-json-server.typicode.com/huynguyen0304/Survey/account", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: this.state.title,
        //         discription: this.state.discription
        //     })
        // })
        // .then(response => console.log(response.json()))
        // .then((response) => {
        //     console.log(response)
        //     if (response) {
        //         AsyncStorage.setItem("Auth", response)
        //         this.props.navigation.navigate("start");
        //     }
        //     else {
        //         alert("Username or Password is incorrect");
        //     }
        // })
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Choose type Questions</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("multiplechoices") }}>
                    <Text style={styles.text}>Multiple Choices</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("textchoices") }}>
                    <Text style={styles.text}>Text Choices</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("yesnochoices") }}>
                    <Text style={styles.text}>YesNo Choices</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#D7D7D7'
    },
    header: {
        backgroundColor: '#1c9ad6',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: "3%"
    },
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff', fontSize: 30,
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    textinput: {
        width: '40%',
        backgroundColor: 'white', 
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        paddingHorizontal: 16,
        fontSize: 14,
        color: 'black',
        marginVertical: 5,
        textAlign: "center",
        textTransform: "uppercase"
    },
    button: {
        width: '40%',
        backgroundColor: '#1c9ad6',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        marginVertical: 10,
        paddingVertical: 12,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textTransform: "uppercase"
    }
})