import express from 'express';
import { FETCH_WEATHER_THIS_WEEK, FETCH_WEATHER_TODAY } from '../constant';
import { getCurrentWeather, getWeeklyWeather } from '../controllers/weather';

const weather = express.Router();

weather.use((req, res, next) => {
  next();
});

weather.route(FETCH_WEATHER_THIS_WEEK).get(getWeeklyWeather);
weather.route(FETCH_WEATHER_TODAY).get(getCurrentWeather);

export default weather;
