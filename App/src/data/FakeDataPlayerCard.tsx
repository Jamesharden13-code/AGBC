import { ImageSourcePropType } from "react-native";

interface FakeDataPlayerCardProps {
    id: number;
    pseudo: string;
    points: number;
    image: ImageSourcePropType
}


export const FakeDataPlayerCard: FakeDataPlayerCardProps[] = [
    {
        id: 1,
        pseudo: 'Toky',
        points: 100,
        image: require('../assets/image/duel.jpeg'),
    },
    {
        id: 2,
        pseudo: 'Tolotra',
        points: 80,
        image: require('../assets/image/jouerFourBillard.webp'),
    },
    {
        id: 3,
        pseudo: 'Flavin',
        points: 23,
        image: require('../assets/image/jouerOneBillard.webp'),
    },
    {
        id: 4,
        pseudo: 'Santatra',
        points: 21,
        image: require('../assets/image/jouerThreeBillard.webp'),
    },
    {
        id: 5,
        pseudo: 'Ndrasana',
        points: 10,
        image: require('../assets/image/jouerTwoBillard.webp'),
    }
]