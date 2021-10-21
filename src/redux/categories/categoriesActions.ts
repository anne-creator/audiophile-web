import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const FETCH_CATEGORIES_ITEMS_START = 
    "FETCH_CATEGORIES_ITEMS_START"; // 正在调用推荐信息api
export const FETCH_CATEGORIES_ITEMS_SUCCESS =
  "FETCH_CATEGORIES_ITEMS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_CATEGORIES_ITEMS_FAIL = 
    "FETCH_CATEGORIES_ITEMS_FAIL"; // 推荐信息api调用失败

interface FetchCategoriesItemsStartAction {
    type: typeof FETCH_CATEGORIES_ITEMS_START
}

interface FetchCategoriesItemsSuccessAction {
    type: typeof FETCH_CATEGORIES_ITEMS_SUCCESS,
    payload: any,
}

interface FetchCategoriesItemsFailAction {
    type: typeof FETCH_CATEGORIES_ITEMS_FAIL,
    payload: any
}

export type CategoriesItemsAction =
  | FetchCategoriesItemsStartAction
  | FetchCategoriesItemsSuccessAction
  | FetchCategoriesItemsFailAction; 

export const fetchCategoriesItemsStartActionCreator = (): FetchCategoriesItemsStartAction => {
  return {
    type: FETCH_CATEGORIES_ITEMS_START,
  };
};

export const fetchCategoriesItemsSuccessActionCreator = (data) : FetchCategoriesItemsSuccessAction => {
    return {
        type: FETCH_CATEGORIES_ITEMS_SUCCESS,
        payload: data
    }
}

export const fetchCategoriesItemsFailActionCreator = (error):FetchCategoriesItemsFailAction => {
    return {
        type: FETCH_CATEGORIES_ITEMS_FAIL,
        payload: error
    }
}

export const giveMeDataActionCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  CategoriesItemsAction
> => async (dispatch) => {
  dispatch(fetchCategoriesItemsStartActionCreator());
  try {
    const { data }:any = await axios.get(
      "https://www.fastmock.site/mock/456923cc3f54559b181a0f418788fccc/api/categories"
    );
    dispatch(fetchCategoriesItemsSuccessActionCreator(data.data));
  } catch (error:any) {
    dispatch(fetchCategoriesItemsFailActionCreator(error.message));
  }
};