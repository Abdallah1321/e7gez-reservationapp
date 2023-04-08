import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import validatior from "validator";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // validation
    if (!req.body.email || !req.body.username || !req.body.password) {
      throw Error("All fields must be filled!");
    }
    if (!validatior.isEmail(req.body.email)) {
      throw Error("Email is invalid!");
    }
    if (!validatior.isStrongPassword(req.body.password)) {
      throw Error("Password is weak!");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User does not exist"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Incorrect username or password"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT,
      { expiresIn: "1d" }
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
