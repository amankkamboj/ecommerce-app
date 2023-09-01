import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

//Configure env
dotenv.config();
//database config
connectDb();

// Rest  object
const app = express();

// middlewares
// enable json
app.use(express.json());
app.use(morgan("dev"));

//All routes
app.use("/api/v1/auth", authRoutes);

//Rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommerce app",
  });
});

//PORT
const port = process.env.PORT || 8080;

//run Listen
app.listen(port, () => {
  console.log(`Server Running on ${port}`.bgCyan.white);
});
