import express from 'express';
import { QUIZ_CATEGORIES } from '../constant';
import { getCategories, getQuiz } from '../controllers/quiz';

const quiz = express.Router();

quiz.use((req, res, next) => {
  next();
});

quiz.route(QUIZ_CATEGORIES).get(getCategories);
quiz.route('/').get(getQuiz);

export default quiz;
