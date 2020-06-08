import * as actionTypes from './actionTypes';

export const getUserListRequest = userRequest => {
  return {
    type: actionTypes.GET_USER_LIST_REQUEST,
    userRequest
  };
};

export const getUserListResponse = userResponse => {
  return {
    type: actionTypes.GET_USER_LIST_RESPONSE,
    userResponse
  };
};
