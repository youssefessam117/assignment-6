import express from "express";
import * as userControler from "./users.controler.js";

const userRoute = express.Router();

userRoute.post("/signup", userControler.signUp);
userRoute.post("/signin", userControler.signIn);
userRoute.put("/update", userControler.update);
userRoute.delete("/delete", userControler.deleteUser);
userRoute.post("/search", userControler.getUserWithAge);
userRoute.post("/search/endwith", userControler.getUserWithNameEnd);
userRoute.post("/search/contain", userControler.getUserContainSearch);
userRoute.post("/search/name", userControler.getUserWithName);

export default userRoute;
