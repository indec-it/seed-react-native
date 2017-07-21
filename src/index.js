/* eslint-disable import/no-unresolved, import/extensions */
import React from 'react';
import Root from './containers/Root';
import configureStore from './store';

const store = configureStore();

const App = () => (
    <Root store={store}/>
);

export default App;
