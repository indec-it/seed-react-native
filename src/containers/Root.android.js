import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {AndroidBackButton} from 'react-router-native';
import {Provider} from 'react-redux';

import Routes from '../components/Routes';
import styles from './styles';

const Root = ({store}) => (
    <Provider store={store}>
        <View style={styles.container}>
            <AndroidBackButton/>
            <Routes/>
        </View>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({}).isRequired
};

export default Root;
