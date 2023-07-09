import { createSlice } from "@reduxjs/toolkit";

const character = createSlice({
  name: "character",
  initialState: {
    sprites: [{ id: "sprite0", positionX: 0, positionY: 0 }],
    active: "sprite0",
  },
  reducers: {
    addCharacter: (state) => {
      console.log(state);
      const spritelist = [...state.sprites];
      let n_id = "sprite" + spritelist.length;
      let n_char = { id: n_id, positionX: 0, positionY: 0 };
      spritelist.push(n_char);
      console.log(spritelist);
      state.sprites = spritelist;
    },
    setActive: (state, action) => {
      state.active = action.payload;
      console.log(state.active);
    },
    updateSpritePosition: (state, action) => {
      let spriteList = [...state.sprites];
      const targetIndex = parseInt(
        action.payload.id.substring(action.payload.id.length - 1)
      );
      let targetSprite = spriteList.splice(targetIndex, 1)[0];
      console.log(targetSprite);
      if (action.payload.posX) {
        targetSprite = {
          ...targetSprite,
          positionX: targetSprite.positionX + action.payload.position,
        };
      }
      if (action.payload.posY) {
        targetSprite = {
          ...targetSprite,
          positionY: targetSprite.positionY + action.payload.position,
        };
      }
      spriteList.splice(targetIndex, 0, targetSprite);
      state.sprites = spriteList;
    },
  },
});

export const { addCharacter, setActive, updateSpritePosition } =
  character.actions;
export default character.reducer;
