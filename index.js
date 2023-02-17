import express from "express";
import connections from "./dataBase/dbConections.js";
import userRoute from "./src/modules/users/users.route.js";
import productRoute from "./src/modules/products/products.route.js";

const app = express();
connections();
app.use(express.json());

app.use("/user", userRoute);
app.use("/products", productRoute);

app.listen(3000, () => {
  console.log("server is runnig");
});
