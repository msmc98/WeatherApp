import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const [loading, error, weather ] = useGetWeather();
  // console.log(loading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={ weather } />
      </NavigationContainer>
    )
  }

  return (
    <View style={ styles.container }>
      <ActivityIndicator
        size={ "large" }
        color={ "black" }
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default App;