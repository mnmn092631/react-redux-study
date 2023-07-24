import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface State {
  input: string;
  todos: Todo[];
}

const initialState: State = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    { id: 2, text: "리액트와 리덕스 사용하기", done: false },
  ],
};

let id = 3;
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    CHANGE_INPUT: (state: State, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    INSERT: (state: State, action: PayloadAction<string>) => {
      state.todos.push({
        id: id++,
        text: action.payload,
        done: false,
      });
    },
    TOGGLE: (state: State, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    REMOVE: (state: State, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { CHANGE_INPUT, INSERT, TOGGLE, REMOVE } = todosSlice.actions;
export default todosSlice.reducer;
