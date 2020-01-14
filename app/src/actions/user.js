import {SET_VK_USER} from './types';

const getVKUser = (id, token) => async (dispatch, getState) => {
  const state = getState();
  const user = await state.api.api.getVKUser(id, token);
  return dispatch({
    type: SET_VK_USER,
    payload: {
      user,
    },
  });
};

export default getVKUser;
