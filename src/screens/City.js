import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar } from "react-native";
import IconText from "../components/IconText";

const City = () => {
    const { container, wrapper, shadowText, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout } = styles;
    return (
        <SafeAreaView style={ container }>
            <ImageBackground source={ require('../../assets/bg-city.jpg') } style={ imageLayout } >
                <View style={ wrapper } >
                    <Text style={ [cityName, cityText, shadowText] }>Cordoba</Text>
                    <Text style={ [countryName, cityText, shadowText] }>Spain</Text>
                    <View style={ [populationWrapper, rowLayout] }>
                        <IconText iconName={ 'users' } iconColor={ 'red' } bodyText={ '8000' } bodyTextStyles={[shadowText, populationText ]} />
                    </View>
                    <View style={ [riseSetWrapper, rowLayout] }>
                        <IconText iconName={ 'sunrise' } iconColor={ 'white' } bodyText={ '06:53:11am' } bodyTextStyles={[shadowText, riseSetText ]} />
                        <IconText iconName={ 'sunset' } iconColor={ 'white' } bodyText={ '19:32:43pm' } bodyTextStyles={[shadowText, riseSetText ]} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    wrapper: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    imageLayout: {
        flex: 1,
        // resizeMode: "cover",
        // justifyContent: "center",
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    shadowText:{
        // textShadow: '0px 1px 2px black',
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",

    },
    populationWrapper: {
        alignItems: "center",
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: "bold",
    },
    riseSetWrapper: {
        justifyContent: "space-around",
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        marginLeft: 7.5,
        color: 'white',
        fontWeight: "bold",
    },
    rowLayout: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30,
    },
})

export default City;