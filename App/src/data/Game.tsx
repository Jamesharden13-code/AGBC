import { ImageSourcePropType } from 'react-native'

export type ImageSliderType = {
    
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const Games = [
    {
        id: 1,
        type: 'Duel',
        title: 'Lancer un Duel',
        image: require('../assets/image/duel.jpeg'),
        date: '2025-10-12',
        description: 'lorem fdsfsifjsdfjisojfidshfdhiosfhisdohfidshfsidjfihsfhdisjidfjosfdp^sfpdof^psldpfkslvjkncxjknvkjvcvxv',
    },
     {
        id: 2,
        type: 'Course',
        title: 'Démarer une Course',
        image: require('../assets/image/course.jpeg'),
        date: '2025-10-12',
        description: 'lorem fdsfsifjsdfjisojfidshfdhiosfhisdohfidshfsidjfihsfhdisjidfjosfdp^sfpdof^psldpfkslvjkncxjknvkjvcvxv',
    },
     {
        id: 3,
        type: 'Créer un Tournoi',
        title: 'Open City Cup',
        image: require('../assets/image/tournoi.jpeg'),
        description: 'lorem fdsfsifjsdfjisojfidshfdhiosfhisdohfidshfsidjfihsfhdisjidfjosfdp^sfpdof^psldpfkslvjkncxjknvkjvcvxv',
    },
]
