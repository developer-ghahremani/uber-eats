import { reduxTypes } from "../../constant";

const initialState = false;

export const cartModal = (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxTypes.cartModal:
      return payload;

    default:
      return state;
  }
};
