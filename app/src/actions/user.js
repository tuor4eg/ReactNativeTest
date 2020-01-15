import {SET_VK_USER} from './types';

const getVKUser = (id, token) => async (dispatch, getState) => {
  const state = getState();
  try {
    const user = await state.api.api.getVKUser(id, token);
    return dispatch({
      type: SET_VK_USER,
      payload: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export default getVKUser;
