import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.headers.post['Content-type']='application/json'
interface productListState {
    loading: boolean;
    error: string | null;
    data: any[];
  }
  const initialState: productListState ={
      loading: true,
      error: null,
      data:[],
  }

export const getProductList = createAsyncThunk(
    'productList/getProductList',
    async(parameters: {},thunkAPI)=>   {
        const {data}:any = await axios.get(
            `https://www.fastmock.site/mock/456923cc3f54559b181a0f418788fccc/api/productDetail`,
            )
        return data;
    }
)
export const productListSlice = createSlice({
    name: "productList",
    initialState,
    reducers: {
    },
    extraReducers: {
      [getProductList.pending.type]: (state) => {
        state.loading = true;
      },
      [getProductList.fulfilled.type]: (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [getProductList.rejected.type]: (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      },
    }
  });