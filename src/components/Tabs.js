import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {
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
                options={ {
                    tabBarIcon: ({ focused }) => <Feather name={ 'droplet' } size={ 25 } color={ focused ? 'white' : 'black' } />
                } } >
                {() => <CurrentWeather weatherData={ weather.list[0] } />}
            </Tab.Screen>
            <Tab.Screen
                name={ "Upcoming" }
                // component={ UpcomingWeather }
                options={ {
                    tabBarIcon: ({ focused }) => <Feather name={ 'clock' } size={ 25 } color={ focused ? 'white' : 'black' } />
                } }  >
                {() => <UpcomingWeather weatherData={ weather.list } />}
            </Tab.Screen>
            <Tab.Screen
                name={ "City" }
                // component={ City }
                options={ {
                    tabBarIcon: ({ focused }) => <Feather name={ 'home' } size={ 25 } color={ focused ? 'white' : 'black' } />
                } }  >
                {() => <City weatherData={ weather.city } />}
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default Tabs;