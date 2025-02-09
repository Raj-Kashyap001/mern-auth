import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import customErrorHandler from "../utils/customError.js";
const handleSignUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};

const handleSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });

    if (!validUser) return next(customErrorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(customErrorHandler(401, "Invalid Credentials!"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...user } = validUser._doc; // Seperate the password from user data contained in ._doc
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 10, // 10 Minutes
      })
      .status(200)
      .json(user);
  } catch (error) {
    next(error);
  }
};

export { handleSignUp, handleSignIn };
