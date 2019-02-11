import {
    filter, size, forEach, find
} from 'lodash';

export default class Structure {
    constructor(data) {
        this.form = data;
    }

    getForm() {
        return this.form;
    }

    getQuestions() {
        const questions = [];

        forEach(
            this.form.rows,
            section => forEach(
                section.questions,
                question => questions.push(question)
            )
        );

        return questions;
    }

    getQuestionsWithParents() {
        return filter(this.getQuestions(), question => size(question.parents));
    }

    replaceQuestionOptions(questionName, newOptions) {
        const selectedQuestion = find(this.getQuestions(), question => question.name === questionName);
        if (selectedQuestion) {
            selectedQuestion.options = newOptions;
        }
    }
}
