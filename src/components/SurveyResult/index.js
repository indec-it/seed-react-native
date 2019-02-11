import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {map} from 'lodash';
import {TextStrong} from '../commons';
import FalabellaButton from './FalabellaButton';
import styles from './styles';

const SurveyResult = ({results}) => (
    <View>
        <Text style={styles.textH2}>
            {results.title}
        </Text>

        <View style={styles.paragraph}>
            <Text style={styles.showResults}>
                {results.description}
            </Text>
        </View>

        <View style={styles.paragraph}>
            <TextStrong>Hombre</TextStrong>

            {map(results.men, (v, i) => (
                <Text key={i} style={styles.showResults}>
                    {`- ${v}`}
                </Text>
            ))}
        </View>

        <View style={styles.paragraph}>
            <TextStrong>Mujer</TextStrong>

            {map(results.women, (v, i) => (
                <Text key={i} style={styles.showResults}>
                    {`- ${v}`}
                </Text>
            ))}
        </View>

        <FalabellaButton/>
    </View>
);

SurveyResult.propTypes = {
    results: PropTypes.shape({}).isRequired
};

export default SurveyResult;
