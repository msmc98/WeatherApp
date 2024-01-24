import react from "react";
import { View, Text } from "react-native";
import { useDay } from "../context/store";

const SeparatorItem = (props) => {
    const { name, num } = props;
    return (
        <View style={ { justifyContent: 'center', backgroundColor: 'transparent', paddingTop: 10, paddingBottom: 10 } }>
            <View style={ { justifyContent: 'center', } }>
                <Text style={ { color: 'black', fontSize: 18, fontWeight: 'bold', paddingLeft: 20 } }>{  }</Text>
                <Text style={ { color: 'black', fontSize: 18, fontWeight: 'bold', paddingLeft: 20 } }>{ `${name} ${num}` }</Text>
            </View>
        </View>
    )
}

export default SeparatorItem;