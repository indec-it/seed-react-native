import {types} from '@indec/react-native-form-builder';
import Structure from '../../model/structure';

const geo = {
    questionOne: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionOne',
                type: types.RADIO,
                text: 'De las siguientes actividades, cuál es su favorita?',
                options: [{
                    value: 1,
                    label: 'Hacer deporte'
                }, {
                    value: 2,
                    label: 'Viajar'
                }, {
                    value: 3,
                    label: 'Leer un buen libro'
                }, {
                    value: 4,
                    label: 'Hacer manualidades y arreglar cosas en casa'
                }, {
                    value: 5,
                    label: 'Cocinar'
                }]
            }]
        }]
    },
    questionTwo: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionTwo',
                type: types.RADIO,
                text: 'De vacaciones prefiere...',
                options: [{
                    value: 1,
                    label: 'Ir a la playa'
                }, {
                    value: 2,
                    label: 'Pasar unos días en el campo'
                }, {
                    value: 3,
                    label: 'Descubrir una ciudad nueva'
                }]
            }]
        }]
    },
    questionThree: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionThree',
                type: types.RADIO,
                text: 'Qué es lo que más le gusta cuando va a una fiesta?',
                options: [{
                    value: 1,
                    label: 'Ligar'
                }, {
                    value: 2,
                    label: 'Pasarlo bien'
                }, {
                    value: 3,
                    label: 'Ser el alma de la fiesta'
                }]
            }]
        }]
    },
    questionFour: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionFour',
                type: types.RADIO,
                text: 'No es narcisista, pero le gusta cuidar su imagen',
                options: [{
                    value: 1,
                    label: 'Si'
                }, {
                    value: 2,
                    label: 'No'
                }]
            }]
        }]
    },
    questionFive: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionFive',
                type: types.RADIO,
                text: 'Es techie y le gusta comprar los últimos gadgets',
                options: [{
                    value: 1,
                    label: 'Si'
                }, {
                    value: 2,
                    label: 'No'
                }]
            }]
        }]
    }
};

const scoring = result => {
    switch (result) {
        case 1:
            return {
                title: 'Action Cam ROLLEI 400 Acuática',
                description: 'Es un gadget que no le puede faltar a los aventureros. '
                + 'Ideal para guardar los recuerdos de esos lugares exóticos o rurales que visitan con frecuencia.',
                women: ['Action Cam ROLLEI 400 Acuática'],
                men: ['Action Cam ROLLEI 400 Acuática']
            };
        case 2:
            return {
                title: 'Minidrone terrestre PARROT Rolling Spider Rojo',
                description: 'La persona a la que le regalas es alguien que disfruta mucho al aire libre, '
                + 'así como también de estar al día con sus gadgets. '
                + 'Un dron es una buena forma de apelar a ambas aficiones '
                    + 'a un lugar desconocido.',
                men: ['Minidrone terrestre PARROT Rolling Spider Rojo'],
                women: ['Minidrone terrestre PARROT Rolling Spider Rojo']
            };
        case 3:
            return {
                title: 'Tirador de Cerveza KRUPS VB650E',
                description: 'Una persona que le gusta la cocina y la buena fiesta '
                + 'seguramente apreciará que le regales esto.',
                men: ['Tirador de Cerveza KRUPS VB650E'],
                women: ['Tirador de Cerveza KRUPS VB650E']
            };
        default:
            return {};
    }
};

const geographic = new Structure(geo);

export default {geographic, scoring};
