import SET_QUESTIONS_LIST, {SET_QUESTION} from '../actions/types';

const initialState = {
  questions: [],
  question: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS_LIST: {
      const {questions} = action.payload;
      return {
        ...state,
        questions,
      };
    }
    case SET_QUESTION: {
      const {question} = action.payload;
      return {
        ...state,
        question,
      };
    }
    default:
      return state;
  }
};

export default questionReducer;
