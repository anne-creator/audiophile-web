/** conect login status with a JWT token  */

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.headers['x-icode'] = 'BF575F644E468D19'

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null; // jwt token
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async (parameters:{
      email:string,
      password: string,
  }, thunkAPI) => {
    const { data }:any = await axios.post(
      `http://123.56.149.216:8080/auth/login`,
      {
        email: parameters.email,
        password: parameters.password,
      },
    );
    console.log(`data in user/slice : ${data.token}`)
    return data.token;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});
