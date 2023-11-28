import express from "express";
import dotenv from "dotenv";
// Middlewares
import errorHandler from "./Middlewares/errorMiddleware.js";
// stateRoutes
import statesRoutes from "./Routes/statesRoutes.js";
// utils
import { endpoints } from "./utils/data.js";
// cors
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Allowed origins and methods
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

// Home route
app.get("/", (req, res) => {
  res.json({
    endpoints,
  });
});

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/states", statesRoutes);

// Error handler any routes
app.get("*", (req, res) => {
  res.status(404);
  throw new Error("404 Not Found");
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
