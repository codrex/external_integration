import { fetchQuiz } from '../client/quiz';
import { categories } from '../constant/categories';
import { QUIZ_AMOUNT } from '../constant';
import { handleRequestError, sendSuccess } from '../utils';

export const getQuiz = async (req, res) => {
  const { difficulty = 'easy', category } = req.query;
  try {
    const requestParams = {
      difficulty,
      amount: QUIZ_AMOUNT,
      category
    };
    const payload = await fetchQuiz(requestParams);
    sendSuccess(res, 200, payload);
  } catch (error) {
    handleRequestError(res, error);
  }
};

export const getCategories = async (req, res) => {
  try {
    sendSuccess(res, 200, categories);
  } catch (error) {
    handleRequestError(res, error);
  }
};
