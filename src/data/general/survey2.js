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
                text: 'En la mesa de luz no le puede faltar',
                options: [{
                    value: 1,
                    label: 'Un libro'
                }, {
                    value: 2,
                    label: 'Un espejo'
                }, {
                    value: 3,
                    label: 'El celular'
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
                text: 'Qué es lo que mas le atrae de una persona?',
                options: [{
                    value: 1,
                    label: 'Que le encante compartir su vida en las redes sociales'
                }, {
                    value: 2,
                    label: 'Que pueda sorprenderlo con su inteligencia'
                }, {
                    value: 3,
                    label: 'El perfume'
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
                text: 'Su mayor sueño es:',
                options: [{
                    value: 1,
                    label: 'Que los avances de la ciencia puedan mejorar la ecologia'
                }, {
                    value: 2,
                    label: 'Ser un cazatendencias reconocido en el mundo'
                }, {
                    value: 3,
                    label: 'Recorrer el mundo en busca de nuevas experiencias'
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
                text: 'Cual es su zona favorita en el shopping?',
                options: [{
                    value: 1,
                    label: 'El complejo de cines'
                }, {
                    value: 2,
                    label: 'Los locales de ropa'
                }, {
                    value: 3,
                    label: 'La plaza de juegos'
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
                text: 'Arma la valija para irse de vacaciones y es capaz de volver si se olvido de guardar',
                options: [{
                    value: 1,
                    label: 'El diario de viaje'
                }, {
                    value: 2,
                    label: 'El iPod con todas sus canciones'
                }, {
                    value: 3,
                    label: 'Un body splash para usar despues de la ducha'
                }]
            }]
        }]
    },
    questionSix: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionSix',
                type: types.RADIO,
                text: 'Lo invitan a salir a festejar y le piden que elija el plan. Que propone?',
                options: [{
                    value: 1,
                    label: 'Ir a un gimnasio'
                }, {
                    value: 2,
                    label: 'Ir a una disco'
                }, {
                    value: 3,
                    label: 'Visitar un lugar desconocido'
                }]
            }]
        }]
    },
    questionSeven: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionSeven',
                type: types.RADIO,
                text: 'Cual es su cualidad mas sobresaliente?',
                options: [{
                    value: 1,
                    label: 'La sensualidad'
                }, {
                    value: 2,
                    label: 'La capacidad de reflexionar sobre los problemas y encontrar soluciones'
                }, {
                    value: 3,
                    label: 'El conocimiento sobre lo ultimo del mercado'
                }]
            }]
        }]
    },
    questionEight: {
        rows: [{
            id: 1,
            questions: [{
                id: 1,
                name: 'questionEight',
                type: types.RADIO,
                text: 'Para ir a tomar mate a lo de un amigo/a usaria:',
                options: [{
                    value: 1,
                    label: 'La ropa de ultima moda'
                }, {
                    value: 2,
                    label: 'Lo que tiene puesto'
                }, {
                    value: 3,
                    label: 'Algo lindo pero comodo'
                }]
            }]
        }]
    }
};

const scoring = result => {
    switch (result) {
        case 1:
            return {
                title: 'Fashion',
                description: 'El regalo perfecto seria algo que esta a la moda',
                women: ['Ropa', 'Accesorios', 'Maquillaje', 'Calzado'],
                men: ['Ropa', 'Accesorios', 'Calzado']
            };
        case 2:
            return {
                title: 'Intelectual',
                description: 'El regalo perfecto seria algun libro interesante o un ticket de viaje. '
                    + 'a un lugar desconocido.',
                men: ['Libros', 'Viajes', 'Cruceros'],
                women: ['Libros', 'Viajes', 'Cruceros']
            };
        case 3:
            return {
                title: 'Hi Tech',
                description: 'El regalo perfecto seria algo electronico.',
                men: ['Computadora', 'Celular'],
                women: ['Computadora', 'Celular']
            };
        default:
            return {};
    }
};

const geographic = new Structure(geo);

export default {geographic, scoring};
