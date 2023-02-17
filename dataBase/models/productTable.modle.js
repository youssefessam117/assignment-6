import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  Pname: String,
  price: String,
  description: String,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
