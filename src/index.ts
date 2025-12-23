import express, { Request, Response } from 'express';
import healthRoutes from './routes/health.routes';

const app = express();
const port = process.env.PORT || 3000;

import dotenv from "dotenv";
dotenv.config();


app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express!');
});

app.use('/', healthRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
