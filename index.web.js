import React from 'react';
import {AppRegistry} from 'react-native';
import {HashRouter} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import App from './src';

const renderApp = () => (
    <AppContainer>
        <HashRouter>
            <App/>
        </HashRouter>
    </AppContainer>
);

AppRegistry.registerComponent('App', () => renderApp);

if (module.hot) {
    module.hot.accept();

    AppRegistry.registerComponent('App', () => renderApp);
}

AppRegistry.runApplication('App', {
    rootTag: document.getElementById('react-root')
});
