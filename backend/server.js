import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connecDB from "./config/db.js";
import ProductRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5001;

connecDB();

const app = express();

app.use("/api/products", ProductRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Api is running!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
