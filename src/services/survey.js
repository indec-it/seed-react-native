import {
    findIndex, head, keys, map, orderBy
} from 'lodash';

const createObject = data => {
    let cnt = 0;
    const obj = {};
    map(data, (i, v) => {
        obj[v] = !cnt;
        cnt += 1;
    });

    return obj;
};

const createSurvey = form => {
    const taxonomicData = {};

    map(form, (i, v) => {
        taxonomicData[v] = null;
    });
    const showQuestions = createObject(taxonomicData);

    return {taxonomicData, showQuestions};
};

const hideQuestions = ({showQuestions, answer}) => {
    const theQuestions = [];

    map(showQuestions, (v, i) => {
        theQuestions.push(i);
    });

    const key = keys(answer)[0];
    const index = findIndex(theQuestions, o => o === key);
    const value = answer[key];
    const nextIndex = index + 1;
    const nextQuestion = theQuestions[nextIndex];
    if (value && value !== 'none') {
        map(theQuestions, v => {
            Object.assign(showQuestions, {[v]: false});
        });

        Object.assign(showQuestions, {[nextQuestion]: true});
    }

    return {questions: showQuestions, nextQuestion};
};

const processResults = (data, scoring) => {
    const totals = [
        {response: 0, votes: 0},
        {response: 1, votes: 0},
        {response: 2, votes: 0},
        {response: 3, votes: 0},
        {response: 4, votes: 0}
    ];

    map(data, i => {
        totals[i].votes += 1;
    });

    const result = head(orderBy(totals, o => o.votes, 'desc')).response;

    return scoring(result);
};

export {hideQuestions, processResults, createSurvey};
