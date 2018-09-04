import express from 'express';
import { getLocation } from '../controllers/location';

const location = express.Router();

location.use((req, res, next) => {
  next();
});

location.route('/').get(getLocation);

export default location;
