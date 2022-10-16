import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import LabRoomScreen from "../screens/LabRoom/LabRoomScreen";
import HomeScreen from "../screens/Home/HomeScreen";

function RootNavigator(props) {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Welcome"}>
                <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
                <Stack.Screen name={"LabRoomScreen"} component={LabRoomScreen} />
                <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
