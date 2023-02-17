import productModel from "./../../../dataBase/models/productTable.modle.js";

// add
export const addProduct = async (req, res) => {
  const { Pname, price, description, owner } = req.body;
  const product = await productModel.insertMany({
    Pname,
    price,
    description,
    owner,
  });
  res.json({ message: "sucsses", product });
};

// update
export const updateProduct = async (req, res) => {
  const { description, _id, owner } = req.body;
  const product = await productModel.findById({ _id });
  if (product) {
    if (product.owner == owner) {
      const updeted = await productModel.findByIdAndUpdate(
        { _id },
        { description },
        { new: true }
      );
      res.json({ message: "sucsses", updeted });
    } else {
      res.json({ message: "wrong owner" });
    }
  } else {
    res.json({ message: "product not found " });
  }
};

// delete
export const deleteProduct = async (req, res) => {
  const { description, _id, owner } = req.body;
  const product = await productModel.findById({ _id });
  if (product) {
    if (product.owner == owner) {
      const deleted = await productModel.findByIdAndDelete({ _id });
      res.json({ message: "deleted", deleted });
    } else {
      res.json({ message: "wrong owner" });
    }
  } else {
    res.json({ message: "product not found " });
  }
};

// get all products with owner's

export const getProductWithOwner = async (req, res) => {
  const product = await productModel.find().populate("owner");
  res.json({ message: "sucsses", product });
};

// get with id
export const getProductWitId = async (req, res) => {
  const { _id } = req.body;
  const product = await productModel.findById(_id);
  res.json({ message: "sucsses", product });
};
