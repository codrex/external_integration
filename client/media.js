import axios from 'axios';
import { PIX_BAY_API_KEY, PIX_BAY_URL } from '../constant';
import { createError } from '../utils';

export async function fetchVideo(tag) {
  try {
    const url = `${PIX_BAY_URL}/videos?key=${PIX_BAY_API_KEY}&q=${tag}&per_page=3`;
    console.log(url);
    const payload = await axios.get(url);
    return payload.data;
  } catch ({ response }) {
    throw createError(response);
  }
}
