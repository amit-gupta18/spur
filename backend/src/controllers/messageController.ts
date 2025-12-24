import type { Request, Response } from "express";
import { chatService } from "../services/chat.service.js";
function messageController(req: Request, res: Response) {
  const message = chatService();
  res.json({ message });
}

export { messageController };