import React from 'react';
import {View} from 'react-native';
import {Switch, Route} from 'react-router-native';
import {Header, SignIn} from '../commons';
import Home from '../Home';
import Survey from '../Survey';
import styles from './styles';

import {
    headerRoutes
} from '../../constants';

const App = () => (
    <View style={styles.container}>
        <Header routes={headerRoutes}/>
        <Switch>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/survey" component={Survey}/>
            <Route component={Home}/>
        </Switch>
    </View>
);

export default App;
