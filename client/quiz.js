import axios from 'axios';
import joi from 'joi';
import { QUIZ_URL } from '../constant';
import { createError } from '../utils';

export async function fetchQuiz(requestParams) {
  try {
    const { category, amount, difficulty } = requestParams;
    const categoryQuery = category ? `&category=${category}` : '';
    const url = `${QUIZ_URL}?amount=${amount}&${categoryQuery}&type=multiple`;
    console.log(url);
    const payload = await axios.get(url);
    return payload.data;
  } catch ({ response }) {
    throw createError(response);
  }
}
