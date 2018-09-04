import axios from 'axios';
import { DARK_SKY_API_KEY, WEATHER_URL, EXCLUDE_ALL_EXCEPT } from '../constant';
import { createError } from '../utils';

function makeRequest(exclude) {
  return async (latitude, longitude) => {
    try {
      const url = ` ${WEATHER_URL}/${DARK_SKY_API_KEY}/${latitude},${longitude}?${exclude}`;
      const payload = await axios.get(url);
      return payload;
    } catch ({ response }) {
      throw createError(response);
    }
  };
}

export const fetchWeekly = makeRequest(EXCLUDE_ALL_EXCEPT.DAILY);
export const fetchCurrently = makeRequest(EXCLUDE_ALL_EXCEPT.CURRENTLY);
