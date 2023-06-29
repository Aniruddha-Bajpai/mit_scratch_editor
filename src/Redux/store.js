import { configureStore } from "@reduxjs/toolkit";
import character from "./characterSlice";
import midArea from "./midAreaSlice";

const store = configureStore({
  reducer: {
    character: character,
    midArea: midArea,
  },
});

export default store;
