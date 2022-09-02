import express from "express";
import { user, see, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit-profile", editProfile);
userRouter.get("/", user);
userRouter.get("/:id", see);

export default userRouter;
