import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import useGetCoords from '../hooks/useGetCoords';

const CityCoordinates = () => {
  const [city, setCity] = useState('');
  const { loading, error, lat, lng, getCityCoordinates } = useGetCoords();

  const handleButtonClick = async () => {
    await getCityCoordinates(city);
  }

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={ styles.textInput }
        placeholder="Input a city name, or a place in general"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Pressable title="Obtain coordinates" onPress={handleButtonClick} style={ styles.button }>
        <Text style={ styles.text }>Obtain coordinates</Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red', marginTop: 10 }}>Error: {error}</Text>}
      {!error && lat && lng && (
        <View style={{ marginTop: 10 }}>
          <Text>Latitud: {lat}</Text>
          <Text>Longitud: {lng}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default CityCoordinates;
