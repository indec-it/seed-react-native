export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';

export function requestLogin() {
    return {type: USER_LOGIN_REQUESTED};
}

export function notifyLoginSucceeded() {
    return {type: USER_LOGIN_SUCCEEDED};
}
