import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoriesReducer from "./categories/categoriesReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categoreis: categoriesReducer,
})
// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;