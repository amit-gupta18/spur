import { Router } from "express";
import type { Request, Response } from "express";
import { messageController } from "../controllers/messageController.js";

const chatRouter = Router();

chatRouter.get("/message", messageController);;
export default chatRouter;