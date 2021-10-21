import {
    FETCH_CATEGORIES_ITEMS_START, 
    FETCH_CATEGORIES_ITEMS_SUCCESS,
    FETCH_CATEGORIES_ITEMS_FAIL,
    CategoriesItemsAction} from './categoriesActions'

interface CategoriesItemsState {
    itemList: any[];
    loading: boolean;
    error: string | null;
}

const defaultState: CategoriesItemsState = {
    itemList: [],
    loading: true,
    error: null,
  };

  export default (state = defaultState, action: CategoriesItemsAction) => {
    switch (action.type) {
      case FETCH_CATEGORIES_ITEMS_START:
        return { ...state, loading: true };
      case FETCH_CATEGORIES_ITEMS_SUCCESS:
        return { ...state, loading: false, itemList: action.payload };
      case FETCH_CATEGORIES_ITEMS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };