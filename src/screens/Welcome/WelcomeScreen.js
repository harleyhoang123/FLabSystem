import React from 'react';
import {Button, Text, TextInput, View} from "react-native";

function WelcomeScreen( {navigation} ) {
    return (
        <View>
            <Text>Login Form</Text>
            <TextInput placeholder={"username"}/>
            <TextInput placeholder={"password"}/>
            <Button title={"Login"} onPress={() => navigation.push("HomeScreen")}/>
        </View>
    );
}

export default WelcomeScreen;
