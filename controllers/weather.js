import { fetchCurrently, fetchWeekly } from '../client/weather';
import { sendSuccess, handleRequestError } from '../utils';

const getWeatherFunc = apiFunction => async (req, res) => {
  const { lon, lat } = req.query;
  try {
    const payload = await apiFunction(lat, lon);
    sendSuccess(res, 200, payload.data);
  } catch (error) {
    handleRequestError(res, error);
  }
};

export const getCurrentWeather = async (req, res) => {
  const getWeather = getWeatherFunc(fetchCurrently);
  getWeather(req, res);
};

export const getWeeklyWeather = async (req, res) => {
  const getWeather = getWeatherFunc(fetchWeekly);
  getWeather(req, res);
};
