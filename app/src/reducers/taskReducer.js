import {
  SET_TODAY_TASKS,
  GET_CURRENT_TASK,
  CLEAR_CURRENT_TASK,
  TAKE_CURRENT_TASK,
} from '../actions/types';

const initialState = {
  todayTasks: [],
  currentTask: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAY_TASKS: {
      const {tasks} = action.payload;
      return {
        ...state,
        todayTasks: tasks,
      };
    }
    case TAKE_CURRENT_TASK: {
      const {currentTask} = action.payload;
      return {
        ...state,
        currentTask,
      };
    }
    case GET_CURRENT_TASK: {
      const {currentTask} = action.payload;
      return {
        ...state,
        currentTask,
      };
    }
    case CLEAR_CURRENT_TASK: {
      return {
        ...state,
        currentTask: null,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
