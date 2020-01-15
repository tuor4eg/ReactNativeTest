import {INIT_API} from './types';
import QuestionAPI from '../QuestionAPI';

const host = 'https://api.myjson.com/bins/8561o';

const initAPI = () => dispatch => {
  /**
   * Create an instance of QuestionAPI class for using by application
   */
  const api = new QuestionAPI(host);
  return dispatch({
    type: INIT_API,
    payload: {
      api,
    },
  });
};

export default initAPI;
