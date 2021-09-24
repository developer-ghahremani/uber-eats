import { reduxTypes } from "../../constant";

const initialState = {};

export const warningModal = (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxTypes.warningModal:
      return payload;

    default:
      return state;
  }
};
