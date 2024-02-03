import { useState, useEffect, useMemo } from 'react';
import * as Location from 'expo-location';
import { PEXELS_API_KEY } from '@env';
import { contextCoord } from '../context/context';

export const useGetPexelsImage = ( thing ) => {
    const [pexelsLoading, setPexelsLoading] = useState(true);
    const [pexelsError, setPexelsError] = useState(null);
    const [pexelsData, setPexelsData] = useState([]);
    const [searchingElement, setSearchingElement] = useState(thing);

    const fetchPexelsData = async () => {
        try {
            const res = await fetch(`https://api.pexels.com/v1/search?query=${searchingElement}&per_page=10`, {
                headers: {
                    "Authorization": PEXELS_API_KEY
                }
            });
            const data = await res.json();
            setPexelsData(data);
            setPexelsLoading(false);
        } catch (e) {
            setPexelsError(e.message);
        } finally {
            setPexelsLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
            setSearchingElement(thing)
            console.log(thing)

            await fetchPexelsData();
        })();
    }, [thing, searchingElement]);

    return [pexelsLoading, pexelsError, pexelsData];
}