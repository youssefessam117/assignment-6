import userModel from "./../../../dataBase/models/userTabls.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  const { name, email, password, age } = req.body;
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    res.send({ message: "email already exist " });
  } else {
    bcrypt.hash(password, 8, async (err, hash) => {
      // Store hash in your password DB.
      const user = await userModel.insertMany({
        name,
        email,
        password: hash,
        age,
      });
      res.json({ message: "success", user });
      console.log(user);
    });
  }
};

// signin
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    const matchPassword = bcrypt.compareSync(password, isExist.password);
    if (matchPassword) {
      res.json({ message: `welcome ${isExist.name}` });
    } else {
      res.json({ message: `password incorect ` });
    }
  } else {
    res.json({ message: "email not exist " });
  }
};
// update user
export const update = async (req, res) => {
  const { email, _id } = req.body;
  const isExist = await userModel.findById({ _id });
  if (isExist) {
    const update = await userModel.findByIdAndUpdate(
      { _id },
      { email },
      { new: true }
    );
    res.json({ message: "success", update });
  } else {
    res.send({ message: "wrong id" });
  }
};
// deleteUser
export const deleteUser = async (req, res) => {
  const { _id } = req.body;
  const isExist = await userModel.findById({ _id });
  if (isExist) {
    const deleted = await userModel.findByIdAndDelete({ _id });
    res.json({ message: "success", deleted });
  } else {
    res.send({ message: "wrong id" });
  }
};
// getUserWithAge
export const getUserWithAge = async (req, res) => {
  const { search, age } = req.body;
  const existsUser = await userModel.find({
    name: { $regex: `^${search}` },
    age: { $lt: age },
  });
  if (existsUser.length === 0) {
    res.json({ message: `cant find users with the match search` });
  } else {
    res.json({ message: "success", existsUser });
  }
};

// getUserWithNameEnd
export const getUserWithNameEnd = async (req, res) => {
  const { search, age } = req.body;
  const existsUser = await userModel.find({
    name: { $regex: `${search}$` },
  });
  if (existsUser.length === 0) {
    res.json({ message: `cant find users with the match search` });
  } else {
    res.json({ message: "success", existsUser });
  }
};

// getUserContainSearch

export const getUserContainSearch = async (req, res) => {
  const { search, age } = req.body;
  const existsUser = await userModel.find({
    name: { $regex: `${search}` },
  });
  if (existsUser.length === 0) {
    res.json({ message: `cant find users with the match search` });
  } else {
    res.json({ message: "success", existsUser });
  }
};

// getUserWithName

export const getUserWithName = async (req, res) => {
  const { search } = req.body;
  const existsUser = await userModel.find({
    name: search,
  });
  if (existsUser.length === 0) {
    res.json({ message: `cant find users with the match search` });
  } else {
    res.json({ message: "success", existsUser });
  }
};
