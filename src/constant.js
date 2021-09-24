export const pageNames = {
  splash: "/splash",
  auth: "/auth",
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
  businesses: {
    businesses: "/businesses",
    search: "/businesses/search",
  },
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

export const foods = [
  {
    id: 1,
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 13.5,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    id: 2,
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: 19.2,
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: 14.5,
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    id: 4,
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: 21.5,
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    id: 5,
    title: "Special Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: 29.5,
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
];

export const reduxTypes = {
  carts: "reduxCartTypes",
  cartModal: "reduxCartModalTypes",
  orders: "reduxOrdersTypes",
  user: "reduxUserTypes",
  warningModal: "reduxWarningModalTypes",
};

export const constants = {
  login: "Login",
  signup: "Signup",
};
