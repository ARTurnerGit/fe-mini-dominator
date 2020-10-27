import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "boardReducer",
  initialState: {
    board: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    update: (state, action) => {
      state.board = [...state.board, action.payload];
    },
  },
});

export const { increment, decrement, update } = slice.actions;

export default slice.reducer;
