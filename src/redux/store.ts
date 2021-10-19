import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { categoriesSlice } from './categories/slice';

const rootReducer = combineReducers({
    categories:categoriesSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
 devTools:true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch