import { create } from 'zustand';

export const contextCoord = create(set => ({
    lat: '',
    lng: '',
    setCoord: (lat, lng) => set({ lat, lng }),
}));
