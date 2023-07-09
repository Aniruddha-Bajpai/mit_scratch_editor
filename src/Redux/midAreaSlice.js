import { createSlice } from "@reduxjs/toolkit";

const midArea = createSlice({
  name: "midArea",
  initialState: {
    midAreaLists: [{ id: "0-midArea", components: ["BROADCAST"] }],
    active: "0-midArea",
  },
  reducers: {
    updateList: (state, action) => {
      state.midAreaLists = action.payload;
    },
    addList: (state) => {
      let midLists = [...state.midAreaLists];
      let new_id = midLists.length + "-midArea";
      midLists.push({
        id: new_id,
        components: ["BROADCAST"],
      });
      state.midAreaLists = midLists;
    },
    updateActive: (state, action) => {
      state.active = action.payload;
      console.log(state.active);
    },
  },
});

export const { updateList, addList, updateActive } = midArea.actions;
export default midArea.reducer;
