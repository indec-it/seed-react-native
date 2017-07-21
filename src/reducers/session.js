import {
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCEEDED
} from '../actions';

export default function person(state = {}, action) {
    switch (action.type) {
        case USER_LOGIN_REQUESTED:
            return {...state};
        case USER_LOGIN_SUCCEEDED:
            return {...state};
        default:
            return state;
    }
}
