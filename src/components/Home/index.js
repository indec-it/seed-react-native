/* eslint import/extensions:"off" */
import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import {types} from '@indec/react-native-form-builder';

import styles from './styles';

const Home = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            {types.YES_NO}
        </Text>
        <Link to="/signIn">
            <Text>Signin</Text>
        </Link>
    </View>
);

export default Home;
