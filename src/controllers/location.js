import fetchLocation from '../client/location';
import { sendSuccess, handleRequestError } from '../utils';

export const getLocation = async (req, res) => {
  const { lon, lat } = req.query;
  try {
    const payload = await fetchLocation(lat, lon);
    sendSuccess(res, 200, payload.address);
  } catch (error) {
    handleRequestError(res, error);
  }
};
