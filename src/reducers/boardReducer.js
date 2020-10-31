import { createSlice } from "@reduxjs/toolkit";

export const board = createSlice({
  name: "boardReducer",
  initialState: [],
  reducers: {
    initialise: (state, action) => {
      return [action.payload];
    },
    incrementRound: (state, action) => {
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));
      const nextState = {
        ...previousState,
        roundCounter: previousState.roundCounter + 1,
        currentString: action.payload.currentString,
        highlighted: [],
      };
      return [...state, nextState];
    },
    changePlayerToGo: (state, action) => {
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));
      const nextState = {
        ...previousState,
        playerToGo: action.payload.playerToGo,
        currentString: action.payload.currentString,
        highlighted: [],
      };
      return [...state, nextState];
    },
    changeTerritoryTroops: (state, action) => {
      // currently gets {currentString, highlighted, territoryReceiving, troopsReceived}
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));
      previousState.territories[action.payload.territoryReceiving].troops +=
        action.payload.troopsReceived;

      const nextState = {
        ...previousState,
        highlighted: action.payload.highlighted,
        currentString: action.payload.currentString,
      };
      return [...state, nextState];
    },
    attackTerritory: (state, action) => {
      // currently gets {currentString, highlighted, attacker, defender, attTerritory, defTerritory, attLosses, defLosses}
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));

      previousState.territories[action.payload.attTerritory].troops -=
        action.payload.attLosses;
      previousState.territories[action.payload.defTerritory].troops -=
        action.payload.defLosses;

      if (/ conquering /.test(action.payload.currentString)) {
        previousState.territories[action.payload.defTerritory].owner =
          action.payload.attacker;
        if (
          previousState.territories[action.payload.attTerritory].troops === 2
        ) {
          previousState.territories[action.payload.attTerritory].troops = 1;
          previousState.territories[action.payload.defTerritory].troops = 1;
        }
      }
      const nextState = {
        ...previousState,
        currentString: action.payload.currentString,
        highlighted: action.payload.highlighted,
      };

      return [...state, nextState];
    },
    moveTroops: (state, action) => {
      // currently gets {currentString, highlighted, arrTerritory, depTerritory, troopMove}
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));
      previousState.territories[action.payload.arrTerritory].troops +=
        action.payload.troopMove;
      previousState.territories[action.payload.depTerritory].troops -=
        action.payload.troopMove;
      const nextState = {
        ...previousState,
        currentString: action.payload.currentString,
        highlighted: action.payload.highlighted,
      };
      return [...state, nextState];
    },
    changePlayerCards: (state, action) => {
      // currently gets {currentString, playerReceiving, cardsReceived}
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));
      previousState.cards[action.payload.playerReceiving] +=
        action.payload.cardsReceived;
      const nextState = {
        ...previousState,
        currentString: action.payload.currentString,
        highlighted: [],
      };
      return [...state, nextState];
    },
    playerDefeated: (state, action) => {
      // will receive {currentString, loserName, winnerName}
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));
      const loserCards = previousState.cards[action.payload.loserName];
      previousState.cards[action.payload.winnerName] += loserCards;
      previousState.cards[action.payload.loserName] = 0;
      const nextState = {
        ...previousState,
        currentString: action.payload.currentString,
        highlighted: [],
      };
      return [...state, nextState];
    },
    updateString: (state, action) => {
      const previousState = JSON.parse(JSON.stringify(state[state.length - 1]));
      const nextState = {
        ...previousState,
        currentString: action.payload.currentString,
        highlighted: [],
      };
      return [...state, nextState];
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
} = board.actions;

export default board.reducer;
