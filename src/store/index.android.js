/* eslint global-require: "off" */
import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import saga from 'redux-saga';
import {persistStore} from 'redux-persist';
import {composeWithDevTools} from 'remote-redux-devtools';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = saga();

const enhancer = composeWithDevTools({
    name: 'seed', realtime: true
})(
    applyMiddleware(sagaMiddleware)
);

export default function configureStore() {
    const store = createStore(reducers, enhancer);
    sagaMiddleware.run(sagas);
    persistStore(store, {storage: AsyncStorage});

    return store;
}
