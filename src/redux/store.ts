import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { categoriesSlice } from "./categories/slice";
import { productPromoteSlice } from "./productPromote/slice";
import { productItemSlice } from "./productItem/slice";
import { userSlice } from './user/slice'


const rootReducer = combineReducers({
    categoreis: categoriesSlice.reducer,
    productPromote: productPromoteSlice.reducer,
    productItem: productItemSlice.reducer,
    user: userSlice.reducer,


})
// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware()],
    devTools: true,
  });
export default store;