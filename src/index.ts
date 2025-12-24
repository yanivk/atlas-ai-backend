import express, { Request, Response } from 'express';
import healthRoutes from './routes/health.routes';
import documentsRoutes from './routes/documents.routes';
import ragRoutes from './routes/rag.routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

import dotenv from "dotenv";
dotenv.config();


app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express!');
});

app.use('/', healthRoutes);
app.use('/documents', documentsRoutes);
app.use('/rag', ragRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
