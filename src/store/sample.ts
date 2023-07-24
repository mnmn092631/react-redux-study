import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as api from "../lib/api";

interface Loading {
  GET_POST: boolean;
  GET_USERS: boolean;
}

interface State {
  loading: Loading;
  post: string | null;
  users: string | null;
}

const initialState: State = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    GET_POST: (state: State, action: PayloadAction<string>) => {
      state.loading = { ...state.loading, GET_POST: true };
    },
    GET_POST_SUCCESS: (state: State, action: PayloadAction<string>) => {
      state = {
        ...state,
        loading: { ...state.loading, GET_POST: false },
        post: action.payload,
      };
    },
    GET_POST_FAILURE: (state: State, action: PayloadAction<string>) => {
      state.loading = { ...state.loading, GET_POST: false };
    },
    GET_USERS: (state: State, action: PayloadAction<string>) => {
      state.loading = { ...state.loading, GET_USERS: true };
    },
    GET_USERS_SUCCESS: (state: State, action: PayloadAction<string>) => {
      state = {
        ...state,
        loading: { ...state.loading, GET_USERS: false },
        users: action.payload,
      };
    },
    GET_USERS_FAILURE: (state: State, action: PayloadAction<string>) => {
      state.loading = { ...state.loading, GET_USERS: false };
    },
  },
});

export const {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} = sampleSlice.actions;
export default sampleSlice.reducer;
