/* global window */
/* eslint global-require: "off" */
import {createStore, applyMiddleware, compose} from 'redux';
import saga from 'redux-saga';
import {persistState} from 'redux-devtools';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';
import sagas from '../sagas';

const sagaMiddleware = saga();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState, enhancer);
    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept(
            '../reducers', () => store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
}
