import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-native';
import {connect} from 'react-redux';
import {Image, View} from 'react-native';

import {requestFetchToken} from '../../../actions/session';
import stylePropType from '../../../util/stylePropType';
import routePropType from '../../../util/routePropType';
import SessionService from '../../../services/session';
import Brand from './Brand';
import Routes from './Routes';
import styles from './styles';

const brandImageDefault = require('../../../images/brand.png');

class Header extends PureComponent {
    static propTypes = {
        brandImage: PropTypes.string,
        rightImage: PropTypes.string,
        style: stylePropType,
        text: PropTypes.string,
        routes: PropTypes.arrayOf(routePropType),
        version: PropTypes.string,
        requestFetchToken: PropTypes.func.isRequired
    };

    static defaultProps = {
        brandImage: brandImageDefault,
        style: {},
        routes: [],
        text: null,
        rightImage: null,
        version: null
    };

    async signOut(route) {
        if (route.closeSession) {
            await SessionService.clearSession();
            const {requestFetchToken: requestFetchToken1} = this.props;
            requestFetchToken1();
        }
    }

    render() {
        const {
            routes, text, brandImage, style, rightImage, version
        } = this.props;
        return (
            <Fragment>
                <View style={[styles.brandContainer, style.brandContainer]}>
                    <Link to="/">
                        <Image source={brandImage} style={styles.brandImage}/>
                    </Link>
                    {text && (
                        <Brand text={text} version={version}/>
                    )}
                    {rightImage && (
                        <Image source={rightImage} style={styles.rightImageStyle}/>
                    )}
                </View>
                <Routes onLogout={route => this.signOut(route)} routes={routes}/>
            </Fragment>
        );
    }
}

export default connect(null,
    dispatch => ({
        requestFetchToken: () => dispatch(requestFetchToken())
    }))(Header);
