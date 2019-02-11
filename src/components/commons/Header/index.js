import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Image, View} from 'react-native';
import {Link} from 'react-router-native';
import {find, get} from 'lodash';

import {requestFetchToken} from '../../../actions/session';
import {CONFIRM_LOGOUT_MESSAGE} from '../../../constants';
import SessionService from '../../../services/session';
import stylePropType from '../../../util/stylePropType';
import routePropType from '../../../util/routePropType';
import ConfirmModal from '../ConfirmModal';
import Brand from './Brand';
import Routes from './Routes';
import styles from './styles';

const getLogoutMessage = routes => get(
    find(routes, route => route.logoutMessage), 'logoutMessage'
) || CONFIRM_LOGOUT_MESSAGE;

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

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    closeModal = () => this.setState(() => ({showModal: false}));

    handleClick = route => route.closeSession && this.setState(() => ({showModal: true}));

    signOut = async () => {
        this.setState(() => ({showModal: false}));
        await SessionService.clearSession();
        const {requestFetchToken: requestFetchToken1} = this.props;
        requestFetchToken1();
    };

    render() {
        const {
            routes, text, brandImage, style, rightImage, version
        } = this.props;
        const {showModal} = this.state;
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
                <Routes onLogout={this.handleClick} routes={routes}/>
                {showModal && (
                    <ConfirmModal
                        onDismiss={() => this.closeModal()}
                        onAccept={() => this.signOut()}
                        text={getLogoutMessage(routes)}
                    />
                )}
            </Fragment>
        );
    }
}

export default connect(null,
    dispatch => ({
        requestFetchToken: () => dispatch(requestFetchToken())
    }))(Header);
