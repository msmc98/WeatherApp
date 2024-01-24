import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = (props) => {
    const { dt_text, min, max, condition, dateTextWrapper } = props
    const { item, date, temp } = styles;
    const color = weatherType[condition].backgroundColor
    const lightColor = weatherType[condition].lightColor
    const icon = weatherType[condition].icon

    const handleLightColor = () => {
        return lightColor ? 'black' : 'white'
    }

    return (
        <View style={ [item, { backgroundColor: color }] } >
            <Feather name={ icon } size={ 50 } color={ handleLightColor() } />
            <View style={ dateTextWrapper }>
                <Text style={ [date, { color: handleLightColor() }] }>{ moment(dt_text).format('dddd') }</Text>
                <Text style={ [date, { color: handleLightColor() }] }>{ moment(dt_text).format('HH:mm') }</Text>
            </View>
            <Text style={ [temp, { color: handleLightColor() }] }>{ `${Math.round(min)}°/${Math.round(max)}°` }</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 20,
        //box shadow web
        boxShadow: '0px 1px 2px 1px black',
    },
    temp: {
        fontSize: 20,
    },
    date: {
        fontSize: 15,
    },
    dateTextWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

})
export default ListItem;
