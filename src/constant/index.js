require('dotenv').config()

export const FETCH_WEATHER_TODAY = '/today';
export const FETCH_WEATHER_THIS_WEEK = '/7days';
export const VIDEO = '/video';
export const WEATHER = '/weather';
export const LOCATION = '/location';
export const MEDIA = '/media';
export const QUIZ = '/quiz';
export const QUIZ_CATEGORIES = '/categories';
export const QUIZ_AMOUNT = process.env.QUIZ_AMOUNT;

const locationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


export const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
export const LOCATION_IQ_KEY = process.env.LOCATION_IQ_KEY;
export const PIX_BAY_API_KEY =  process.env.PIX_BAY_API_KEY;
export const WEATHER_URL = 'https://api.darksky.net/forecast';
export const LOCATION_URL = 'https://us1.locationiq.com/v1/reverse.php';
export const PIX_BAY_URL = 'https://pixabay.com/api/';
export const QUIZ_URL = 'https://opentdb.com/api.php';
const DAILY = 'exclude=currently,hourly,flags,minutely';
const CURRENTLY = 'exclude=hourly,flags,minutely,daily';
export const EXCLUDE_ALL_EXCEPT = { DAILY, CURRENTLY };
export default locationOptions;
