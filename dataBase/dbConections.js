import mongoose from "mongoose";

const connections = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://127.0.0.1:27017/assignment6")
    .then(() => console.log("Connected!"))
    .catch((err) => {
      console.log(err);
    });
};
export default connections;
