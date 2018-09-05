/* eslint-disable camelcase */

import axios from 'axios';
import { LOCATION_URL, LOCATION_IQ_KEY } from '../constant';
import { createError } from '../utils';

async function fetchLocation(latitude, longitude) {
  try {
    const payload = await axios.get(`${LOCATION_URL}?key=${LOCATION_IQ_KEY}&lat=${latitude}&lon=${longitude}&format=json`);
    return payload.data;
  } catch ({ response }) {
    throw createError(response);
  }
}

export default fetchLocation;
