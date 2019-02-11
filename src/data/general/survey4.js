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
                text: 'Cuando sea grande quiere...',
                options: [{
                    value: 1,
                    label: 'Ser deportista profesional'
                }, {
                    value: 2,
                    label: 'Inventar o crear algo'
                }, {
                    value: 3,
                    label: 'Ser presidente'
                }, {
                    value: 4,
                    label: 'Viajar por todo el mundo y no quedarse fijo en ningun lugar'
                }, {
                    value: 5,
                    label: 'Ninguna de las anteriores'
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
                text: 'Si fuera un personaje seria',
                options: [{
                    value: 1,
                    label: 'Un ultra deportista'
                }, {
                    value: 2,
                    label: 'Un payaso'
                }, {
                    value: 3,
                    label: 'Un mini Einstein'
                }, {
                    value: 4,
                    label: 'El demonio de Tazmania'
                }, {
                    value: 5,
                    label: 'Ninguna de las anteriores'
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
                text: 'Si le dieran dinero para comprarse algo, probablemente...',
                options: [{
                    value: 1,
                    label: 'Compraria una pelota o botines'
                }, {
                    value: 2,
                    label: 'Compraria Legos o juguetes para armar'
                }, {
                    value: 3,
                    label: 'Compraria juegos para la Play'
                }, {
                    value: 4,
                    label: 'Compraria un skate'
                }, {
                    value: 5,
                    label: 'Ninguna de las anteriores'
                }]
            }]
        }]
    }
};

const scoring = result => {
    switch (result) {
        case 1:
            return {
                title: 'Deportista',
                description: 'Le gustan los deportes',
                women: ['Palo de hockey'],
                men: ['Pelota de futbol']
            };
        case 2:
            return {
                title: 'Artista',
                description: 'Le gusta crear y expresarse a traves de cosas creativas',
                men: ['Pinceles Legos Playmobil'],
                women: ['Brillantina Libros para colorear']
            };
        case 3:
            return {
                title: 'Intelectual',
                description: 'Muy observador y le gusta comocer el porque de las cosas',
                men: ['Libros Juegos de experimentos'],
                women: ['Libros']
            };
        case 4:
            return {
                title: 'Inquieto',
                description: 'Despliega mucha energia. Es el alma de la fiesta. No puede quedarse quieto',
                men: ['Saltarin Patines Skate'],
                women: ['Patines iPod Soga de saltar']
            };
        case 5:
            return {
                title: 'Un boludo atomico',
                description: 'Dale la plata y que se compre lo que quiera',
                men: ['Libros Juegos de experimentos'],
                women: ['Libros']
            };
        default:
            return {};
    }
};

const geographic = new Structure(geo);

export default {geographic, scoring};
