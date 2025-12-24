import express  from 'express'
import type { Request, Response } from 'express';
import chatRouter from './routes/chat.route.js';

console.log("This is an express ts app");


const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript working 🚀" });
});

app.use('/api/chat' , chatRouter);

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
