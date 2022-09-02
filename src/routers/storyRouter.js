import express from "express";
import { see, edit, deleteStory } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", see);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", deleteStory);

export default storyRouter;
