import { reduxTypes } from "../../constant";

export const setOrders = (payload) => ({
  type: reduxTypes.orders,
  payload,
});

export const appendOrder = (order) => (dispatch, getState) => {
  dispatch(setOrders([...getState().orders, order]));
};
