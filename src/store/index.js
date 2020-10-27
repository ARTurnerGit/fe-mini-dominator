import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../reducers/test";

export default configureStore({
  reducer: {
    test: testReducer,
  },
});
