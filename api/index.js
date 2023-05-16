import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import restaurantsRoute from "./routes/restaurants.js";
import tablesRoute from "./routes/tables.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
  } catch (error) {
    throw error;
  }
};

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://e7gez.netlify.app/",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected!");
});

//middlewares
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/restaurants", restaurantsRoute);
app.use("/api/tables", tablesRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Server running on port 8800");
});
