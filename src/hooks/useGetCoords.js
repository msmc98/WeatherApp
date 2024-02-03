import { useState, useEffect, useCallback } from 'react';
import { contextCoord } from '../context/context';

const useGetCoords = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //   const [coordinates, setCoordinates] = useState(null);

    const [lat, lng, setCoord] = contextCoord(state => [state.lat, state.lng, state.setCoord]);
    const [searchingCity, setSearchingCity] = useState('');

    const getCityCoordinates = useCallback(async (city) => {
        try {
            setLoading(true);
            setSearchingCity(city);

            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
            );
            const data = await response.json();

            // Extraer las coordenadas de la respuesta
            const location = data[0];
            if (location) {
                setCoord(parseFloat(location.lat), parseFloat(location.lon));
                setError(null);
            } else {
                setError('No se encontraron coordenadas para la ciudad ingresada.');
            }
        } catch (error) {
            setError(`Error al obtener las coordenadas: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (searchingCity) {
            getCityCoordinates(searchingCity);
        }
    }, [getCityCoordinates]);

    return {
        loading,
        error,
        lat,
        lng,
        getCityCoordinates,
    };
};

export default useGetCoords;
