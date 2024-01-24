import React from "react";
import { StyleSheet, View, SafeAreaView, FlatList, ImageBackground } from "react-native";
import EmptyItem from "../components/EmptyItem";
import ListItem from "../components/ListItem";
import SeparatorItem from "../components/SeparatorItem";
import moment from "moment";
import { useDay } from "../context/store";

const UpcomingWeather = ({ weatherData }) => {
    let currentDay = "";

    const renderItem = ({ item, index }) => {
        const day = moment(item.dt_txt).format('dddd')
        const num = moment(item.dt_txt).format('DD')

        if (day !== currentDay) {
            currentDay = day;

            return (
                <>
                    <SeparatorItem name={day} num={num}/>
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
            <ImageBackground source={ require('../../assets/bg-storm.jpg') } style={ styles.image } >
                <FlatList
                    data={ weatherData }
                    renderItem={ renderItem }
                    keyExtractor={ item => item.dt.toString() }
                    ListEmptyComponent={ <EmptyItem /> }>
                </FlatList>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    image: {
        flex: 1,
    }

})
export default UpcomingWeather;
