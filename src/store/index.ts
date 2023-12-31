import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todosSlice from "./todos";
import sampleSlice from "./sample"
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger();
const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
    sample: sampleSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
