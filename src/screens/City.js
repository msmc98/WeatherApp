import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar } from "react-native";
import IconText from "../components/IconText";
import moment from "moment";
import { useGetPexelsImage } from "../hooks/useGetPexelsImage";
import { randomNumber } from "../utilities/utils";

const City = ({ weatherData }) => {
    const [city, setCity] = useState(weatherData?.name);
    const [loadingPexels, errorPexels, pexelsData] = useGetPexelsImage(city);
    const element = randomNumber(0, 9);
    const image = pexelsData?.photos ? pexelsData.photos[element]?.src?.original : '../../assets/bg-city.jpg';

    useEffect(() => {
        if (weatherData?.name !== city) {
            setCity(weatherData?.name);
        }
    }, [weatherData]);

    // console.log(city, image);

    const { container, wrapper, shadowText, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout } = styles;
    const { name, country, population, sunrise, sunset } = weatherData;

    return (
        <SafeAreaView style={ container }>
            <ImageBackground source={ { "uri": image } } style={ imageLayout } >
                <View style={ wrapper } >
                    <Text style={ [cityName, cityText, shadowText] }>{ name }</Text>
                    <Text style={ [countryName, cityText, shadowText] }>{ country }</Text>
                    <View style={ [populationWrapper, rowLayout] }>
                        <IconText iconName={ 'users' } iconColor={ 'red' } bodyText={ `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}` } bodyTextStyles={ [shadowText, populationText] } />
                    </View>
                    <View style={ [riseSetWrapper, rowLayout] }>
                        <IconText iconName={ 'sunrise' } iconColor={ 'white' } bodyText={ moment(sunrise).format('hh:mm:ss') } bodyTextStyles={ [shadowText, riseSetText] } />
                        <IconText iconName={ 'sunset' } iconColor={ 'white' } bodyText={ moment(sunset).format('HH:mm:ss') } bodyTextStyles={ [shadowText, riseSetText] } />
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
        backgroundColor: "rgba(0,0,0,0.5)",
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
    shadowText: {
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