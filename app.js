import express from 'express';
import logger from 'morgan';
import bodyPaser from 'body-parser';
import cors from 'cors';
import path from 'path';
import route from './routes';

const app = express();
app.use(logger('dev'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({
  extended: false,
}));
app.use(cors());
app.options('*', cors());
app.use('/', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/api/', route);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

export default app;
