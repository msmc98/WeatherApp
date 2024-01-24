import React from "react";
import { Text, View } from "react-native";

const IconText = (props) => {
    const { messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles } = props;
    return (
        <View style={ containerStyles }>
            <Text style={ messageOneStyles}>{messageOne}</Text>
            <Text style={ messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}


export default IconText;