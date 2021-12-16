import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { categoriesSlice } from "./categories/slice";
import { productPromoteSlice } from "./productPromote/slice";
import { productItemSlice } from "./productItem/slice";
import { userSlice } from './user/slice';
import { cartListSlice } from './cartList/slice';
import { persistStore,persistReducer } from 'redux-persist'; //make store persist
import storage from 'redux-persist/lib/storage'; //using local storage

/**  config code persist*/
const persistConfig = {
  key:"root",
  storage,
  // whitelist:["user","cart"],
}
const rootReducer = combineReducers({
    categoreis: categoriesSlice.reducer,
    productPromote: productPromoteSlice.reducer,
    productItem: productItemSlice.reducer,
    user: userSlice.reducer,
    cart:cartListSlice.reducer
})

//  make persistedReducer useing persistReducer() 
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: persistedReducer, //add persistedReducer here
    middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware()],
    devTools: true,
  });

//create persist store
const persistor = persistStore(store);
// eslint-disable-next-line
export default {store, persistor};