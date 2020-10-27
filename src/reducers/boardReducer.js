import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "boardReducer",
  initialState: [],
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    initialise: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { increment, decrement, initialise } = slice.actions;

export default slice.reducer;
