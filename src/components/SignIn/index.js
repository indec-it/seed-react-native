import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Link} from 'react-router-native';

import {requestLogin} from '../../actions';
import styles from './styles';

class SignIn extends Component {
    static propTypes = {
        requestLogin: PropTypes.func.isRequired
    };

    componentDidMount() {
        // eslint-disable-next-line
        this.props.requestLogin();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    SignIn
                </Text>
                <Link to="/">
                    <Text>Home</Text>
                </Link>
            </View>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        requestLogin: () => dispatch(requestLogin())
    })
)(SignIn);
