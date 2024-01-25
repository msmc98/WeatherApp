import react from "react";
import { StyleSheet, Text, View  } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
    return (
        <View style={styles.container}>
            <Feather name={ 'frown' } size={ 100 } color={ 'white' } />
            <Text style={styles.errorMessage}> Sorry, something went wrong </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        flexDirection: "row",
    },
    errorMessage: {
        fontSize: 30,
        color: "white",
        // marginHorizontal: 10,
        textAlign: "center",
    },
})

export default ErrorItem;