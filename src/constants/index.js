const CONFIRM_LOGOUT_MESSAGE = 'Desea salir de la aplicacion?';

export {CONFIRM_LOGOUT_MESSAGE};

const APP_NAME = 'JLQQ';

export const REDIRECT_URI = 'https://uatadrsy.indec.gob.ar';

export const PING_ENDPOINT = `${REDIRECT_URI}/ping`;

export const AUTH_ENDPOINT = 'https://uathei.indec.gob.ar';
export const CLIENT_ID = 'ihZa3A0CtnH8qjET';
export const CLIENT_SECRET = 'FQJrl6SZzubiU2XkHM49yIPg';

const headerRoutes = [{
    key: 1,
    icon: 'list-alt',
    text: 'Home',
    path: '/'
}, {
    key: 2,
    icon: 'list-alt',
    text: 'Regalar',
    path: '/survey'
}];

export {APP_NAME};
export {headerRoutes};
