import {call, put} from 'redux-saga/effects';
import {notifyLoginSucceeded} from '../actions';
import SessionService from '../services/session';

// eslint-disable-next-line import/prefer-default-export
export function* signIn() {
    yield call(SessionService.signIn);
    yield put(notifyLoginSucceeded());
}
