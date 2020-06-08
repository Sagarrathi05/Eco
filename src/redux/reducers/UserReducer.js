import * as actionTypes from '../action/actionTypes';

const initialState = {
  userListData: [],
  userNames: {}
};

const userListDetails = (state, action) => {
  const { userResponse } = action;
  let arr = [...userResponse];
  arr.sort(function(a, b){
    var keyA = new Date(a.name),
        keyB = new Date(b.name);
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
});
  return { ...state, userListData: arr };
};

const userNameDetails = (state, action) => {
  const { userNameResponse } = action;
  return { ...state, userNames: userNameResponse };
};

const UserData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LIST_RESPONSE:
      return userListDetails(state, action);
    default:
      return state;
  }
};

export default UserData;
