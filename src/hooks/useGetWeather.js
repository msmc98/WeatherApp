import { useState, useEffect, useMemo } from 'react';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';
import { contextCoord } from '../context/context';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, lng, setCoord] = contextCoord(state => [state.lat, state.lng, state.setCoord]);

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHER_API_KEY}`);
            const data = await res.json();
            setWeather(data);
            setLoading(false);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }
            if (!lat && !lng) {
                let location = await Location.getCurrentPositionAsync({});
                setCoord(location.coords.latitude, location.coords.longitude);
            }

            await fetchWeatherData();
        })();
    }, [lat, lng]);

    return [loading, error, weather];
}