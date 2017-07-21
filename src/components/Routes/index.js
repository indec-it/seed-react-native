import React from 'react';
import {Switch, Route} from 'react-router-native';
import Home from '../Home';
import SignIn from '../SignIn';

const App = () => (
    <Switch>
        <Route path="/signIn" component={SignIn}/>
        <Route component={Home}/>
    </Switch>
);

export default App;
