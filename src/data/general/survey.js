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
                text: 'Esta persona tiene 15 minutos libres antes de una salida. Qué haría?',
                options: [{
                    value: 1,
                    label: 'Arreglarse'
                }, {
                    value: 2,
                    label: 'Ordenar su escritorio'
                }, {
                    value: 3,
                    label: 'Hacer una playlist'
                }, {
                    value: 4,
                    label: 'Pensar en el menu'
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
                text: 'Qué película navideña escogería?',
                options: [{
                    value: 1,
                    label: 'Rodolfo, el reno de la nariz roja'
                }, {
                    value: 2,
                    label: 'El Grinch'
                }, {
                    value: 3,
                    label: 'Milagro en la calle 84'
                }, {
                    value: 4,
                    label: 'Home alone'
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
                text: 'Su canción navideña es:',
                options: [{
                    value: 1,
                    label: 'All I want for Christmas is you'
                }, {
                    value: 2,
                    label: 'Feliz navidad'
                }, {
                    value: 3,
                    label: 'Navidad sin ti'
                }, {
                    value: 4,
                    label: 'Noche de paz'
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
                text: 'Estos dos emojis le describen:',
                options: [{
                    value: 1,
                    label: ':)'
                }, {
                    value: 2,
                    label: ';)'
                }, {
                    value: 3,
                    label: ':p'
                }, {
                    value: 4,
                    label: ':('
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
                text: 'Qué haría una tarde en su casa?',
                options: [{
                    value: 1,
                    label: 'Una tarde de spa'
                }, {
                    value: 2,
                    label: 'Arreglar el sonido de la sala'
                }, {
                    value: 3,
                    label: 'Organizar una noche de juegos'
                }, {
                    value: 4,
                    label: 'Probar una nueva receta'
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
                text: 'Si fuera un café sería...',
                options: [{
                    value: 1,
                    label: 'Un french press'
                }, {
                    value: 2,
                    label: 'Un capuchino'
                }, {
                    value: 3,
                    label: 'Un americano con leche'
                }, {
                    value: 4,
                    label: 'Un latte saborizado'
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
                text: 'En la oficina es la persona que probablemente podría prestarte:',
                options: [{
                    value: 1,
                    label: 'Una taza'
                }, {
                    value: 2,
                    label: 'Un desarmador'
                }, {
                    value: 3,
                    label: 'Un espejo'
                }, {
                    value: 4,
                    label: 'Cubiertos'
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
                text: 'Nunca saldría de casa sin:',
                options: [{
                    value: 1,
                    label: 'Galletitas'
                }, {
                    value: 2,
                    label: 'Audifonos'
                }, {
                    value: 3,
                    label: 'Un paquete de pañuelitos desechables'
                }, {
                    value: 4,
                    label: 'Labial'
                }]
            }]
        }]
    }
};

const scoring = result => {
    switch (result) {
        case 1:
            return {
                title: 'Perfección para cualquier ocasión',
                description: 'No tiene un pelo fuera de lugar, literalmente. Sus selfies son impecables.',
                men: ['Afeitadoras rasuradoras', 'Sillón masajeador'],
                women: ['Secadoras y planchas de cabello', 'Masajeadores', 'Joyeros']
            };
        case 2:
            return {
                title: 'El alma de la fiesta',
                description: 'Siempre están dispuestos a mantener la fiesta encendida. '
                    + 'Música, bebidas y relax son su fuerte.',
                men: ['Frigobar', 'Sacacorchos', 'Audífonos', 'Microcomponentes de audios'],
                women: ['Frigobar', 'Sacacorchos', 'Audífonos', 'Microcomponentes de audios']
            };
        case 3:
            return {
                title: 'Los mejores anfitriones',
                description: 'Una tarde de películas en su casa es una experiencia más grata que ir al cine. '
                    + 'Harán todo lo posible para que te sientas como la realeza porque les encanta recibir invitados.',
                men: ['Copas, vasos y vajillas', 'Cubiertos', 'Maquina de pochoclos', 'Boquiteros Arreglos navideños'],
                women: ['Copas, vasos y vajillas', 'Cubiertos', 'Maquina de pochoclos', 'Boquiteros Arreglos navideños']
            };
        case 4:
            return {
                title: 'La cocina es su vida',
                description: 'Martha Stewart no les podría envidiar nada. '
                    + 'Son cocineros expertos y siempre están experimentando con nuevas recetas. '
                    + 'Dales algo para su cocina y serán felices por siempre.',
                men: ['Baterías de cocina', 'Electrodomésticos', 'Utensilios', 'Sets de cuchillos'],
                women: ['Baterías de cocina', 'Electrodomésticos', 'Utensilios', 'Sets de cuchillos']
            };
        default:
            return {};
    }
};

const geographic = new Structure(geo);

export default {geographic, scoring};
