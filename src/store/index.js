import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../reducers/boardReducer";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
});
