import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "boardReducer",
  initialState: {
    board: [],
  },
  reducers: {
    // this copies the whole state in one shot
    initialise: (state, action) => {
      state.board = [action.payload];
    },
    incrementRound: (state) => {
      const lastState = state.board[state.board.length - 1];
      const nextState = {
        ...lastState,
        roundCounter: lastState.roundCounter + 1,
      };
      state.board = [...state.board, nextState];
    },
    changePlayerToGo: (state, action) => {
      const lastState = state.board[state.board.length - 1];
      const nextState = {
        ...lastState,
        playerToGo: action.payload,
      };
      state.board = [...state.board, nextState];
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
  initialise,
  incrementRound,
  changePlayerToGo,
  changeTerritoryTroops,
  changeTerritoryOwner,
  changePlayerCards,
} = slice.actions;

export default slice.reducer;
