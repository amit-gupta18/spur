import express  from 'express'
import type { Request, Response } from 'express';

console.log("This is an express ts app");


const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript working 🚀" });
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
