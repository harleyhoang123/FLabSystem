import React from 'react';
import {Image, StyleSheet} from "react-native";
import stylesheet from "react-native-web/dist/exports/StyleSheet";

function Logo(props) {
    return <Image source={require("../assets/logo.png")} style={styles.logo}/>;
}
const styles = stylesheet.create({
    logo: {
        width: "50px",
        height: "50px"
    }
    }
)
export default Logo;
