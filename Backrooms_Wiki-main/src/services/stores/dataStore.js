import { create } from 'zustand';

export const useDataStore = create((set) => ({
    selectedData: null,
    favorites: [],
    setSelectedData: (selectedData) => set({ selectedData }),

    
    addFavorite: (item, type) => set((state) => {
        
        if (state.favorites.some(fav => fav.id === item.id && fav.type === type)) {
            return state; 
        }
        return { favorites: [...state.favorites, { ...item, type }] };
    }),

    removeFavorite: (id, type) => set((state) => ({
        favorites: state.favorites.filter((fav) => fav.id !== id || fav.type !== type)
    }))
}));
