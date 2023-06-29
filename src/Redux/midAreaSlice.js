import { createSlice } from "@reduxjs/toolkit";

const midArea = createSlice({
  name: "midArea",
  initialState: {
    components: ["BROADCAST"],
  },
  reducers: {
    updateList: (state, action) => {
      console.log(state.components, action.payload);
      state.components = action.payload;
    },
  },
});

export const { updateList } = midArea.actions;
export default midArea.reducer;
