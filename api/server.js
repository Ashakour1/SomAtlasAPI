import express from "express";
import dotenv from "dotenv";
import errorHandler from "./Middlewares/errorMiddleware.js";
import statesRoutes from "./Routes/statesRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());


app.use("/api/states", statesRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


