import { reduxTypes } from "../../constant";

const initialState = [];

export const carts = (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxTypes.carts:
      return payload;

    default:
      return state;
  }
};
