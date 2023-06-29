import { createSlice } from "@reduxjs/toolkit";

const character = createSlice({
  name: "character",
  initialState: {
    sprites: ["sprite0"],
    active: "sprite0",
  },
  reducers: {
    addCharacter: (state) => {
      const spritelist = state.sprites;
      spritelist.push("sprite" + state.sprites.length);
      state = { ...state };
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { addCharacter, setActive } = character.actions;
export default character.reducer;
