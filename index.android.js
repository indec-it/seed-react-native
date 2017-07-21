import React from 'react';
import {AppRegistry} from 'react-native';
import {NativeRouter} from 'react-router-native';
import App from './src';

const Root = () => (
    <NativeRouter>
        <App/>
    </NativeRouter>
);

AppRegistry.registerComponent('rfb', () => Root);
