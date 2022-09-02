import express from "express";
import { join, login, home } from "../controllers/userController";
import { trending, newUser } from "../controllers/storyController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newUser);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
