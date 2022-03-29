import { ActionTypes } from '../action-types';
const initialState = {
  products: [],
  copyproducts: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        copyproducts: action.payload,
      };
    case ActionTypes.SET_SEARCHRESULTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
// export const searchReducer = (state = {}, action) => {
//   debugger;
//   switch (action.type) {
//     case ActionTypes.SET_SEARCHRESULTS:
//       return {
//         ...state,
//         products: action.payload,
//       };
//     default:
//       return state;
//   }
// };
