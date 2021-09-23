import { reduxTypes } from "../../constant";

export const setCartModal = (payload) => ({
  type: reduxTypes.cartModal,
  payload,
});
