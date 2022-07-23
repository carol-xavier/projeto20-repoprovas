import express, {json} from 'express';
import "express-async-errors";
import cors from 'cors';

import router from './routes';
import { errorHandlerMiddleware } from './middlewares/errorMiddleware';

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
