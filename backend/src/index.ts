
import express, { Request, Response, NextFunction, Application } from 'express';
import { configDotenv } from 'dotenv';
import connect_db from './config/db-config';



configDotenv();
connect_db();

const app:Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});