import { ActionTypes } from './action-types';

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const setSelectedProducts = (product) => {
  return {
    type: ActionTypes.SET_SELECTEDPRODUCT,
    payload: product,
  };
};
