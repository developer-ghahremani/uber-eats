export const capitalise = (text = "") =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export const getLog = (message) => console.info(`___Workd From ${message}`);

export const getRandomString = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
