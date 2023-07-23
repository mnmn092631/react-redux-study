import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todosSlice from "./todos";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
