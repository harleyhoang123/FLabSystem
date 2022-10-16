import React from 'react';
import {Button, Text, View} from "react-native";
import HomeTopNavigator from "../../navigation/HomeTopNavigator";

function HomeScreen( {navigation} ) {
    return (
        <View>
            <HomeTopNavigator navigation={navigation} />
            <Text>This is home page</Text>
        </View>
    );
}

export default HomeScreen;
