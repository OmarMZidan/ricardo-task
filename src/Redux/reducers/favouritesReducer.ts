import { Action } from "../actions/index";
import { ActionType } from "../action-types";

const initialState: any[] = [];
const reducer = (state: any[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT_TO_FAVOURITES:
      const addProductState = [...state, action.payload];
      return addProductState;

    case ActionType.REMOVE_PRODUCT_FROM_FAVOURITES:
      const removeProductState = state.filter((obj) => {
        return obj.id !== action.payload;
      });
      return removeProductState;

    default:
      return state;
  }
};

export default reducer;
