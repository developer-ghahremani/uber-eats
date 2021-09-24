import { reduxTypes } from "../../constant";

const initialState = [];

export const orders = (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxTypes.orders:
      return payload;

    default:
      return state;
  }
};
