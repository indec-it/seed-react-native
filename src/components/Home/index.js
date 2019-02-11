import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

import styles from './styles';

const Home = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Necesitas hacerle un regalo a alguien especial?
        </Text>
        <Link to="/survey" style={styles.buttonStart}>
            <Text>Encuentra el regalo perfecto</Text>
        </Link>
    </View>
);

export default Home;
