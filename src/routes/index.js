import express from 'express';
import weather from './weather';
import location from './location';
import media from './media';
import quiz from './quiz';
import { WEATHER, LOCATION, MEDIA, QUIZ } from '../constant';
import { sendSuccess } from '../utils';

const route = express.Router();

const fn = (req, res, next) => {
  next();
};

route.use(fn);
route.use(WEATHER, weather);
route.use(LOCATION, location);
route.use(MEDIA, media);
route.use(QUIZ, quiz);

route.use('/', (req, res) => {
  sendSuccess(res, 200, 'Welcome to external integration API');
});

export default route;
