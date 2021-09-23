export const capitalise = (text = "") =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export const getLog = (message) => console.log(`___Workd From ${message}`);
