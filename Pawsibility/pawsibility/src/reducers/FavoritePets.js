import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const FavoritePets = createSlice({
  name: "favPets",
  initialState,
  reducers: {
    addFav: (state, action) => {
      let index = state.findIndex((pet) => pet.id === action.payload.id);
      if (index == -1) {
        return [...state, action.payload];
      } else {
        console.log("This pet is in favorites already!");
        return state;
      }
    },
    removeFav: (state, action) => {
      return state.filter((pet) => pet.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav } = FavoritePets.actions;

export default FavoritePets.reducer;
