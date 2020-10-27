import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "boardReducer",
  initialState: {
    board: [],
  },
  reducers: {
    // this copies the whole state in one shot
    update: (state, action) => {
      state.board = [...state.board, action.payload];
    },
    incrementRound: (state, action) => {
      return state;
    },
    changePlayerToGo: (state, action) => {
      return state;
    },
    changeTerritoryTroops: (state, action) => {
      return state;
    },
    changeTerritoryOwner: (state, action) => {
      return state;
    },
    changePlayerCards: (state, action) => {
      return state;
    },
  },
});

export const {
  update,
  incrementRound,
  changePlayerToGo,
  changeTerritoryTroops,
  changeTerritoryOwner,
  changePlayerCards,
} = slice.actions;

export default slice.reducer;
