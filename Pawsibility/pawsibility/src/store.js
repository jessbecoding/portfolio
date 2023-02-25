import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./reducers/SearchPetSlice";
import shelterReducer from "./reducers/ShelterSlice";
import FavoritePetsReducer from "./reducers/FavoritePets";

export const store = configureStore({
  reducer: {
    pets: petReducer,
    shelter: shelterReducer,
    favPets: FavoritePetsReducer,
  },
});
