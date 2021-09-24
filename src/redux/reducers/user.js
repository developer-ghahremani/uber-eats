import { reduxTypes } from "../../constant";

const initialState = {};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxTypes.user:
      return payload;

    default:
      return state;
  }
};
