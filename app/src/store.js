import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import questionReducer from './reducers/questionReducer';
import apiReducer from './reducers/apiReducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  api: apiReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
