const handleUserGet = (req, res, next) => {
  res.status(200).json({ message: "user get is working!" });
  next();
};

export default handleUserGet;
