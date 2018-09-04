import express from 'express';
import { geVideo } from '../controllers/media';
import { VIDEO } from '../constant';

const media = express.Router();

media.use((req, res, next) => {
  next();
});

media.route(VIDEO).get(geVideo);

export default media;
