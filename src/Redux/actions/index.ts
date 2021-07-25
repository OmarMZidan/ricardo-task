import { ActionType } from "../action-types";
interface AddProductToFavouritesAction {
  type: ActionType.ADD_PRODUCT_TO_FAVOURITES;
  payload: {};
}

interface RemoveProductFromFavouritesAction {
  type: ActionType.REMOVE_PRODUCT_FROM_FAVOURITES;
  payload: string;
}

export type Action =
  | AddProductToFavouritesAction
  | RemoveProductFromFavouritesAction;
