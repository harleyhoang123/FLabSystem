import React from 'react';
import {Button, Text, View} from "react-native";

function LabRoomScreen( {navigation} ) {
    return (
        <View>
            <Text>This page is description for a lab room</Text>
            <Button title={"Go to lab room"} onPress={() => navigation.push("LabNavigator")}/>
        </View>
    );
}

export default LabRoomScreen;
