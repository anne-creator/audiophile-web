import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { categoriesSlice } from "./categories/slice";
import { productListSlice } from "./productList/slice";

const rootReducer = combineReducers({
    categoreis: categoriesSlice.reducer,
    productList: productListSlice.reducer
})
// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware()],
    devTools: true,
  });
export default store;