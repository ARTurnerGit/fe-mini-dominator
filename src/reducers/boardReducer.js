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
    incrementRound: (state, action) => {
      const lastState = state.board[state.board.length - 1];
      const nextState = {
        ...lastState,
        roundCounter: lastState.roundCounter + 1,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    changePlayerToGo: (state, action) => {
      const lastState = state.board[state.board.length - 1];
      const nextState = {
        ...lastState,
        playerToGo: action.payload.playerToGo,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    changeTerritoryTroops: (state, action) => {
      // currently gets {currentString, highlighted, territoryReceiving, troopsReceived}
      const lastState = state.board[state.board.length - 1];
      lastState.territories[action.payload.territoryReceiving].troops +=
        action.payload.troopsReceived;
      const nextState = {
        ...lastState,
        highlighted: action.payload.highlighted,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    changeTerritoryOwner: (state, action) => {
      return state;
    },
    changePlayerCards: (state, action) => {
      // currently gets {currentString, playerReceiving, cardsReceived}
      const lastState = state.board[state.board.length - 1];
      lastState.cards[action.payload.playerReceiving] +=
        action.payload.cardsReceived;
      const nextState = {
        ...lastState,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
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
