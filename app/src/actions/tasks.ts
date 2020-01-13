import {
  SET_TODAY_TASKS,
  GET_CURRENT_TASK,
  CLEAR_CURRENT_TASK,
  TAKE_CURRENT_TASK,
} from './types';
import tasks, {currentTask} from '../test/testTasks';

interface Task {
  id: number,
  name: string;
  description: string;
}

const getTodayTasks = () => async (dispatch: any, getState: any) => {
const shuffled = tasks.sort(() => 0.5 - Math.random());
const selected = shuffled.slice(0, 3);
  try {
    return dispatch({
      type: SET_TODAY_TASKS,
      payload: {
        tasks: selected,
      },
    });
  } catch (error) {
    return error;
  }
};

export const getCurrentTask = () => async (dispatch: any, getState: any) => {
  const state = getState();
  try {
    return dispatch({
      type: GET_CURRENT_TASK,
      payload: {
        currentTask: state.tasks.currentTask
          ? state.tasks.currentTask
          : currentTask,
      },
    });
  } catch (error) {
    return error;
  }
};

export const takeCurrentTask = (data: Task) => async (
  dispatch: any,
  getState: any,
) => {
  try {
    return dispatch({
      type: TAKE_CURRENT_TASK,
      payload: {
        currentTask: data,
      },
    });
  } catch (error) {
    return error;
  }
};

export const clearCurrentTask = () => async (dispatch: any, getState: any) => {
  try {
    return dispatch({
      type: CLEAR_CURRENT_TASK,
      payload: null,
    });
  } catch (error) {
    return error;
  }
};

export default getTodayTasks;
