import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import validator from "validator";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // validation
    if (!req.body.email || !req.body.username || !req.body.password) {
      throw Error("All fields must be filled!");
    }
    if (!validator.isEmail(req.body.email)) {
      throw Error("Email is invalid!");
    }
    if (!validator.isStrongPassword(req.body.password)) {
      throw Error("Password is weak!");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.bodyd.password, salt);

    const newUser = new User({
      ...req.body,
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
      .json({details: {...otherDetails}, isAdmin });
  } catch (err) {
    next(err);
  }
};
