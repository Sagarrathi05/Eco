import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as Api from '../../services/api';
import {
  getUserListResponse,
  getUserNameListResponse
} from '../action/UserAction';

export function* allUserListSaga(data) {
  try {
    const {userRequest} = data;
    const responseData = yield axios.get(
      `${Api.userapi}`
    );
    const  response  = responseData.data;
      yield put(getUserListResponse(response));
    
  } catch (error) {
    console.log('error : ', error);
    // yield put({type: 'LOGIN_ERROR', error})
  }
}

