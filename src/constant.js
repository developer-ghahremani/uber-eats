export const pageNames = {
  splash: "/splash",
  home: {
    index: "/home",
    home: "/home/home",
    browse: "/home/browse",
    grocery: "/home/grocery",
    orders: "/home/orders",
    account: "/home/account",
  },
  restaurantDetails: {
    index: "/restaurantDetails",
  },
};

export const endPoints = {
  businesses: { search: "/businesses/search" },
};

export const transactionTypes = ["delivery", "pickup"];

export const categories = [
  { name: "pick-up", image: require("./../assets/images/shopping-bag.png") },
  { name: "Soft Drink", image: require("./../assets/images/soft-drink.png") },
  { name: "Bakery Items", image: require("./../assets/images/bread.png") },
  { name: "Fast Food", image: require("./../assets/images/fast-food.png") },
  { name: "Desserts", image: require("./../assets/images/desserts.png") },
  { name: "Coffee", image: require("./../assets/images/coffee.png") },
  { name: "Deals", image: require("./../assets/images/deals.png") },
];

export const yelApiKey =
  "UQgTLmUAQHvx5iWXr2cP8AN2aN1BWTmUy34ZBKni_5fN-8_9XlRDEVHHqKwtg0SX6-2npPe2n5CbiwcZYI6JWKEUolViGVEGLVGxkyPm5QpwgljdrVDWVboNZw5MYXYx";
