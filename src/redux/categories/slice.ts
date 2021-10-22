import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface categoriesState {
    loading: boolean;
    error: string | null;
    data: any;
  }
  const initialState: categoriesState ={
      loading: true,
      error: null,
      data:null,
  }

export const getCategories = createAsyncThunk(
    'categories/getCategoreis',
    async({}, thunkAPI)=>   {
        const {data} = await axios.get(`https://www.fastmock.site/mock/456923cc3f54559b181a0f418788fccc/api/categories`)
        return data;
    }
)
export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
    },
    extraReducers: {
      [getCategories.pending.type]: (state) => {
        state.loading = true;
      },
      [getCategories.fulfilled.type]: (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [getCategories.rejected.type]: (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      },
    }
  });