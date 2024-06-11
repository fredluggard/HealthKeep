
import express, { Request, Response, NextFunction, Application } from 'express';
import { configDotenv } from 'dotenv';
import connect_db from './config/db-config';



configDotenv();
connect_db();

const port: number = parseInt(process.env.PORT || '3000');

const app:Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
  console.log('Hello World!')

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
