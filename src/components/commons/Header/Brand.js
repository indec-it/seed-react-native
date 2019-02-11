import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const Brand = ({text, version}) => (
    <View>
        <Text style={styles.text}>
            {text}
        </Text>
        {version && (<Text style={styles.versionStyle}>{version}</Text>)}
    </View>
);

Brand.propTypes = {
    text: PropTypes.string,
    version: PropTypes.string
};

Brand.defaultProps = {
    text: null,
    version: null
};

export default Brand;
