import { create } from 'zustand';

export const useDay = create(set => ({
    day: '',
    setDay: () => set((state) => ({ day: state.day })),
}));
