import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.headers.post['Content-type']='application/json'
interface productPromoteState {
    loading: boolean;
    error: string | null;
    data: any[];
  }
  const initialState: productPromoteState ={
      loading: true,
      error: null,
      data:[],
  }
export const getProductPromote = createAsyncThunk(
    'productPromote/getProductPromote',
    async(parameters: {},thunkAPI)=>   {
        const {data}:any = await axios.get(
            `https://www.fastmock.site/mock/456923cc3f54559b181a0f418788fccc/api/productpromote`,
            )
        return data;
    }
)
export const productPromoteSlice = createSlice({
    name: "productPromote",
    initialState,
    reducers: {
    },
    extraReducers: {
      [getProductPromote.pending.type]: (state) => {
        state.loading = true;
      },
      [getProductPromote.fulfilled.type]: (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [getProductPromote.rejected.type]: (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      },
    }
  });