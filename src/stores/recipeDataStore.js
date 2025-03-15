import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipeData: {
        ingredients: [],
        preferences: {},
        restrictions: [],
    },
    setRecipeData: (data) => set({ recipeData: data }),
}));

export default useRecipeStore;
