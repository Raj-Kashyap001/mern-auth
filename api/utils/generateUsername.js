export const generateUsername = (name) => {
  const username =
    name.split(" ").join("").toLowerCase() +
    Math.round(Math.random() * 1000).toString();
  return username;
};
