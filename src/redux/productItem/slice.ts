import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.headers.post['Content-type']='application/json'
interface productItemState {
    loading: boolean;
    error: string | null;
    data: any;
  }
  const initialState: productItemState ={
      loading: true,
      error: null,
      data:null,
  }

export const getProductItem = createAsyncThunk(
    'productItem/getProductItem',
    async(productId:string,thunkAPI)=>   {
        const {data}:any = await axios.get(
            `https://www.fastmock.site/mock/456923cc3f54559b181a0f418788fccc/api/productItem/${productId}`,
            )
        return data;
    }
)
export const productItemSlice = createSlice({
    name: "productItem",
    initialState,
    reducers: {
    },
    extraReducers: {
      [getProductItem.pending.type]: (state) => {
        state.loading = true;
      },
      [getProductItem.fulfilled.type]: (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [getProductItem.rejected.type]: (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      },
    }
  });