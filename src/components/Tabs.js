import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import CityCoordinates from '../components/CityCoordinates';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={ ({
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: 'gray',
                    borderTopWidth: 0,
                    boxShadow: '0px 1px 2px 1px black',
                    elevation: 6,
                },
                headerStyle: {
                    backgroundColor: 'gray',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'black',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 3,
                    marginTop: -5,
                },
            }) }>
            <Tab.Screen
                name={ "Current" }
                // component={ CurrentWeather }
                options={ ({ navigation }) => ({
                    tabBarIcon: ({ focused }) => <Feather name={ 'droplet' } size={ 25 } color={ focused ? 'white' : 'black' } />,
                    headerRight: () => (
                        <TouchableOpacity
                            style={ { marginRight: 15 } }
                            onPress={ () => navigation.navigate("Search") }>
                            <Feather name={ 'map-pin' } size={ 25 } color={ 'black' } />
                        </TouchableOpacity>
                    ),
                }) }>
                { () => <CurrentWeather weatherData={ weather.list[0] } /> }
            </Tab.Screen>
            <Tab.Screen
                name={ "Upcoming" }
                // component={ UpcomingWeather }
                options={ ({ navigation }) => ({
                    tabBarIcon: ({ focused }) => <Feather name={ 'clock' } size={ 25 } color={ focused ? 'white' : 'black' } />,
                    headerRight: () => (
                        <TouchableOpacity
                            style={ { marginRight: 15 } }
                            onPress={ () => navigation.navigate("Search") }>
                            <Feather name={ 'map-pin' } size={ 25 } color={ 'black' } />
                        </TouchableOpacity>
                    ),
                }) }  >
                { () => <UpcomingWeather weatherData={ weather.list } weatherCity={ weather.city } /> }
            </Tab.Screen>
            <Tab.Screen
                name={ "City" }
                // component={ City }
                options={ ({ navigation }) => ({
                    tabBarIcon: ({ focused }) => <Feather name={ 'home' } size={ 25 } color={ focused ? 'white' : 'black' } />,
                    headerRight: () => (
                        <TouchableOpacity
                            style={ { marginRight: 15 } }
                            onPress={ () => navigation.navigate("Search") }>
                            <Feather name={ 'map-pin' } size={ 25 } color={ 'black' } />
                        </TouchableOpacity>
                    ),
                }) }  >
                { () => <City weatherData={ weather.city } /> }
            </Tab.Screen>
            <Tab.Screen
                name={ "Search" }
                // no quiero mostrat este componente en el tab, solo quiero que se muestre cuando se presione el icono de la derecha en el header
                // component={ SearchPlace }
                options={ () => ({
                    tabBarVisible: false,
                    tabBarButton: () => null,
                }) } >
                { () => <CityCoordinates weatherData={ weather.city } /> }
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default Tabs;