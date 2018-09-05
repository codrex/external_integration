import express from 'express';
import logger from 'morgan';
import bodyPaser from 'body-parser';
import cors from 'cors';
import path from 'path';
import route from './routes';
import { sendSuccess } from './utils'

const app = express();
app.use(logger('dev'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({
  extended: false,
}));
app.use(cors());
app.options('*', cors());
app.use('/api/', route);
app.use('/', (req, res) => {
  sendSuccess(res, 200, 'Welcome to external integration');
});

export default app;
