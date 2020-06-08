import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action/actionTypes';

import {
  allUserListSaga,

} from './UserSaga';


export function* watchUser() {
  yield all([
    takeLatest(actionTypes.GET_USER_LIST_REQUEST, allUserListSaga),
  ]);
}
