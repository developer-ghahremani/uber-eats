import { reduxTypes } from "../../constant";
import { getLog } from "../../utils";

export const setCarts = (payload) => ({
  type: reduxTypes.carts,
  payload,
});

/**
 *
 * @param {object} product - product object
 * @param {object} restaurant - restaurant item
 */
export const toggleCart = (product, restaurant) => (dispatch, getState) => {
  // console.log(getState().carts);
  const carts = [...getState().carts];
  const cart = carts.findIndex((item) => item.product.id === product.id);
  if (cart >= 0) {
    getLog("Add to cart");
    return dispatch(
      setCarts(carts.filter((item) => item.product.id !== product.id))
    );
  }
  getLog("delete from cart");
  dispatch(setCarts([...carts, { product, restaurant }]));
};
