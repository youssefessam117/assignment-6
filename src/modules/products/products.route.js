import express from "express";
import * as productControler from "./products.controler.js";

const productRoute = express.Router();

productRoute.post("/addproduct", productControler.addProduct);
productRoute.put("/update", productControler.updateProduct);
productRoute.delete("/delete", productControler.deleteProduct);
productRoute.get("/owner", productControler.getProductWithOwner);
productRoute.get("/getWithId", productControler.getProductWitId);
export default productRoute;
