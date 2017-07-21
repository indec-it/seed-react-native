import {all, takeEvery} from 'redux-saga/effects';
import {USER_LOGIN_REQUESTED} from '../actions';
import {signIn} from './session';

export default function* root() {
    yield all([
        takeEvery(USER_LOGIN_REQUESTED, signIn)
    ]);
}
