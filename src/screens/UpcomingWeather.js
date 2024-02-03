import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, ImageBackground } from "react-native";
import EmptyItem from "../components/EmptyItem";
import ListItem from "../components/ListItem";
import SeparatorItem from "../components/SeparatorItem";
import moment from "moment";
import { useGetPexelsImage } from "../hooks/useGetPexelsImage";
import { randomNumber } from "../utilities/utils";

const UpcomingWeather = ({ weatherData, weatherCity }) => {
    const [city, setCity] = useState(weatherCity?.name);
    const [loadingPexels, errorPexels, pexelsData] = useGetPexelsImage(city);
    const element = randomNumber(0, 9);
    const image = pexelsData?.photos ? pexelsData.photos[element]?.src?.original : '../../assets/bg-city.jpg';

    useEffect(() => {
        if (weatherCity?.name !== city ) {
            setCity(weatherCity?.name);
        }
    }, [weatherData]);

    let currentDay = "";

    const renderItem = ({ item, index }) => {
        const day = moment(item.dt_txt).format('dddd')
        const num = moment(item.dt_txt).format('DD')

        if (day !== currentDay) {
            currentDay = day;

            return (
                <>
                    <SeparatorItem name={ day } num={ num } />
                    <ListItem
                        key={ index }
                        condition={ item.weather[0].main }
                        dt_text={ item.dt_txt }
                        min={ item.main.temp_min }
                        max={ item.main.temp_max }
                    />
                </>
            )
        }

        return <ListItem
            condition={ item.weather[0].main }
            dt_text={ item.dt_txt }
            min={ item.main.temp_min }
            max={ item.main.temp_max }
        />
    }
    return (
        <SafeAreaView style={ styles.container }>
            <ImageBackground source={ { "uri": image } } style={ styles.image } >
                <View style={ styles.wrapper } >
                    <FlatList
                        data={ weatherData }
                        renderItem={ renderItem }
                        keyExtractor={ item => item.dt.toString() }
                        ListEmptyComponent={ <EmptyItem /> }>
                    </FlatList>
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "top",
        backgroundColor: "rgba(0,0,0,0.9)",
    },
    wrapper: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

})
export default UpcomingWeather;
