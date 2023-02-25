import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const SearchPetSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    searchPets: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFav, removeFav, searchPets } = SearchPetSlice.actions;

export default SearchPetSlice.reducer;
