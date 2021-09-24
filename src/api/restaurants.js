import api from ".";
import { endPoints } from "../constant";

/**
 *
 * @param {string} term - type of term
 * @param {string} location -location , city or contry
 * @param {number} limit - page size
 * @param {number} offset - page
 * @returns
 */
export const getRestaurants = (
  location = "San Diego",
  limit = 50,
  offset = 0,
  term = "restaurants"
) =>
  api.get(endPoints.businesses.search, {
    params: { limit, offset, term, location: location.replace(" ", "") },
  });
