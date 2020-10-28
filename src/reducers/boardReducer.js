import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "boardReducer",
  initialState: {
    board: [],
  },
  reducers: {
    initialise: (state, action) => {
      state.board = [action.payload];
    },
    incrementRound: (state, action) => {
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );
      const nextState = {
        ...lastState,
        roundCounter: lastState.roundCounter + 1,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    changePlayerToGo: (state, action) => {
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );
      const nextState = {
        ...lastState,
        playerToGo: action.payload.playerToGo,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    changeTerritoryTroops: (state, action) => {
      // currently gets {currentString, highlighted, territoryReceiving, troopsReceived}
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );
      lastState.territories[action.payload.territoryReceiving].troops +=
        action.payload.troopsReceived;
      const nextState = {
        ...lastState,
        highlighted: action.payload.highlighted,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    attackTerritory: (state, action) => {
      // currently gets {currentString, highlighted, attacker, attTerritory, defTerritory, attLosses, defLosses}
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );

      lastState.territories[action.payload.attTerritory].troops -=
        action.payload.attLosses;
      lastState.territories[action.payload.defTerritory].troops -=
        action.payload.defLosses;

      if (/ conquering /.test(action.payload.currentString)) {
        lastState.territories[action.payload.defTerritory].owner =
          action.payload.attacker;
        if (lastState.territories[action.payload.attTerritory].troops === 2) {
          lastState.territories[action.payload.attTerritory].troops = 1;
          lastState.territories[action.payload.defTerritory].troops = 1;
        }
      }
      const nextState = {
        ...lastState,
        currentString: action.payload.currentString,
        highlighted: action.payload.highlighted,
      };

      state.board = [...state.board, nextState];
    },
    moveTroops: (state, action) => {
      // currently gets {currentString, highlighted, arrTerritory, depTerritory, troopMove}
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );
      lastState.territories[action.payload.arrTerritory].troops +=
        action.payload.troopMove;
      lastState.territories[action.payload.depTerritory].troops -=
        action.payload.troopMove;
      const nextState = {
        ...lastState,
        currentString: action.payload.currentString,
        highlighted: action.payload.highlighted,
      };
      state.board = [...state.board, nextState];
    },
    changePlayerCards: (state, action) => {
      // currently gets {currentString, playerReceiving, cardsReceived}
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );
      lastState.cards[action.payload.playerReceiving] +=
        action.payload.cardsReceived;
      const nextState = {
        ...lastState,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    playerDefeated: (state, action) => {
      // will receive {currentString, loserName, winnerName}
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );
      const loserCards = lastState.cards[action.payload.loserName];
      lastState.cards[action.payload.winnerName] += loserCards;
      lastState.cards[action.payload.loserName] = 0;
      const nextState = {
        ...lastState,
        currentString: action.payload.currentString,
      };
      state.board = [...state.board, nextState];
    },
    updateString: (state, action) => {
      const lastState = JSON.parse(
        JSON.stringify(state.board[state.board.length - 1])
      );
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
  attackTerritory,
  moveTroops,
  changePlayerCards,
  playerDefeated,
  updateString,
} = slice.actions;

export default slice.reducer;
