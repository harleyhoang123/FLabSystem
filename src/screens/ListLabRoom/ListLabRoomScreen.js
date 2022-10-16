import React from 'react';
import {Button, View} from "react-native";

function ListLabRoomScreen( {navigation}) {
    return (
        <View>
            <Button title={"Room 1"} onPress={() => navigation.push("LabRoomScreen")}/>
            <Button title={"Room 2"} onPress={() => navigation.push("LabRoomScreen")}/>
            <Button title={"Room 3"} onPress={() => navigation.push("LabRoomScreen")}/>
        </View>
    );
}

export default ListLabRoomScreen;
