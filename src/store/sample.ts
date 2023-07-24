import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as api from "../lib/api";

interface Loading {
  GET_POST: boolean;
  GET_USERS: boolean;
}

interface Post {
  title: string;
  body: string;
}

interface User {
  id: number;
  username: string;
  email: string;
}

interface State {
  loading: Loading;
  post: Post | null;
  users: User[] | null;
  error?: boolean;
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
    GET_POST: (state: State) => {
      state.loading = { ...state.loading, GET_POST: true };
    },
    GET_POST_SUCCESS: (state: State, action: PayloadAction<Post>) => {
      state.loading = { ...state.loading, GET_POST: false };
      state.post = action.payload;
    },
    GET_POST_FAILURE: (state: State, action: PayloadAction<Error>) => {
      state.loading = { ...state.loading, GET_POST: false };
      state.error = true;
    },
    GET_USERS: (state: State) => {
      state.loading = { ...state.loading, GET_USERS: true };
    },
    GET_USERS_SUCCESS: (state: State, action: PayloadAction<User[]>) => {
      state.loading = { ...state.loading, GET_USERS: false };
      state.users = action.payload;
    },
    GET_USERS_FAILURE: (state: State, action: PayloadAction<Error>) => {
      state.loading = { ...state.loading, GET_USERS: false };
      state.error = true;
    },
  },
});

export const getPost =
  (id: number): any =>
    async (dispatch: Dispatch) => {
      dispatch(GET_POST());
      try {
        const res = await api.getPost(id);
        dispatch(GET_POST_SUCCESS(res.data));
      } catch (e) {
        dispatch(GET_POST_FAILURE(e as Error));
        throw e;
      }
    };

export const getUsers = (): any => async (dispatch: Dispatch) => {
  dispatch(GET_USERS());
  try {
    const res = await api.getUsers();
    dispatch(GET_USERS_SUCCESS(res.data));
  } catch (e) {
    dispatch(GET_USERS_FAILURE(e as Error));
    throw e;
  }
};

export const {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} = sampleSlice.actions;
export default sampleSlice.reducer;
