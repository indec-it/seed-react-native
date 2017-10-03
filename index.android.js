import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {NativeRouter} from 'react-router-native';
import App from './src';

/**
 * Root component for Android bundle.
 * Keep this as a class-component, else HRM does not work.
 */
class Root extends Component {
    render() {
        return (
            <NativeRouter>
                <App/>
            </NativeRouter>
        );
    }
}

AppRegistry.registerComponent('rfb', () => Root);
