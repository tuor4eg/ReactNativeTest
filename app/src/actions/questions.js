import SET_QUESTIONS_LIST, {SET_QUESTION} from './types';

const getQuestionsList = () => async (dispatch, getState) => {
  const state = getState();
  const questions = await state.api.api.getQuestionsList();
  const questionsWithUrls = questions.filter(item => item.url);
  const questionsWithoutUrls = questions.filter(item => !item.url);
  return dispatch({
    type: SET_QUESTIONS_LIST,
    payload: {
      questions: [...questionsWithUrls, ...questionsWithoutUrls],
    },
  });
};

export const getQuestion = url => async (dispatch, getState) => {
  const state = getState();
  const question = await state.api.api.getQuestion(url);
  return dispatch({
    type: SET_QUESTION,
    payload: {
      question,
    },
  });
};

export default getQuestionsList;
