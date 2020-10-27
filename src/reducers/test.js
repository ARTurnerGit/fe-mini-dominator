import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "test",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = slice.actions;

export default slice.reducer;
