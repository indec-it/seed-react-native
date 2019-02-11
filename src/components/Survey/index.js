import React, {Component} from 'react';
import {View} from 'react-native';
import {map, sample} from 'lodash';
import Form from '@indec/react-native-survey-commons/src/components/Form';
import allSurveys from '../../data/general/allSurveys';
import {hideQuestions, createSurvey, processResults} from '../../services/survey';
import SurveyResult from '../SurveyResult';

import styles from './styles';

class Survey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showQuestions: {}
        };
    }

    componentDidMount() {
        const selectedSurvey = sample(allSurveys);

        this.setState(() => ({geographic: selectedSurvey.geographic, scoring: selectedSurvey.scoring}));
        this.setState(createSurvey(selectedSurvey.geographic.form));
    }

    handleChange(answer) {
        const {showQuestions, taxonomicData, scoring} = this.state;
        this.setState(state => ({taxonomicData: Object.assign(state.taxonomicData, answer)}));

        const {questions, nextQuestion} = hideQuestions({showQuestions, answer});
        this.setState(() => ({showQuestions: questions}));

        if (!nextQuestion) {
            this.setState(() => ({surveyResults: processResults(taxonomicData, scoring)}));
        }
    }

    render() {
        const {
            showQuestions, surveyResults, taxonomicData, geographic
        } = this.state;

        return (
            <View style={styles.container}>
                {surveyResults && (<SurveyResult results={surveyResults}/>)}

                {!surveyResults && (
                    <View>
                        {map(taxonomicData, (i, v) => showQuestions[v] && (
                            <Form
                                key={i}
                                rows={geographic.form[v].rows}
                                chapter={taxonomicData}
                                onChange={answer => this.handleChange(answer)}
                            />
                        ))}
                    </View>
                )}
            </View>
        );
    }
}

export default Survey;
