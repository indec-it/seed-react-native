import React from 'react';
import {AppRegistry} from 'react-native';
import {HashRouter} from 'react-router-dom';
import App from './src';

const Root = () => (
    <HashRouter>
        <App/>
    </HashRouter>
);

AppRegistry.registerComponent('App', () => Root);
AppRegistry.runApplication('App', {
    rootTag: document.getElementById('react-root')
});
