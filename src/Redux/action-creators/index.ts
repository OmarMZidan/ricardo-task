import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { Article } from "../../utils/interfaces";

export const AddProductToFavourites = (product: Article) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_PRODUCT_TO_FAVOURITES,
      payload: product,
    });
  };
};

export const RemoveProductFromFavourites = (productId: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_PRODUCT_FROM_FAVOURITES,
      payload: productId,
    });
  };
};
