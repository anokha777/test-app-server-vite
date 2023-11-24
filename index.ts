import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { AppDataSource } from './data-source';

AppDataSource.initialize();

const app = express();
app.use(helmet());

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  credentials: true,
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.SERVER_PORT || 8070;

app.listen(PORT, () => {
  console.log(
    '\x1b[32m',
    `***************************** Server is up on port ${PORT} *****************************`,
    '\x1b[32m',
  );
});

// app.use('/api', new AppRoutes().router);

app.get('/api/health', (req: Request, res: Response) => {
  res.json(`service health is good, and running on port ${PORT}`);
});

app.use((error: any, req: Request, res: Response, next: any) => {
  if (error)
    res.status(500).send({
      statusCode: error.statusCode,
      msg: error.error && error.error.msg,
    });
  next();
});

app.use((req: Request, res: Response) => {
  res.status(404).send('NOT Found.');
});
