import { fetchVideo } from '../client/media';
import { sendSuccess, handleRequestError } from '../utils';

export const geVideo = async (req, res) => {
  const { tag } = req.query;
  try {
    const payload = await fetchVideo(tag);
    console.log(payload);
    sendSuccess(res, 200, payload);
  } catch (error) {
    handleRequestError(res, error);
  }
};
