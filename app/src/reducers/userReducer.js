import {SET_VK_USER} from '../actions/types';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VK_USER: {
      const {user} = action.payload;
      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
};

export default userReducer;