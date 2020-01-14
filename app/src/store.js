import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import questionReducer from './reducers/questionReducer';
import apiReducer from './reducers/apiReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  api: apiReducer,
  user: userReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
