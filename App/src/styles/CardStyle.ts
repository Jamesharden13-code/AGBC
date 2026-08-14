import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({

    cardContainer: {
        top: 20,
        height: 120,
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    playerImageContainer: {
        borderRadius: 50,
        marginLeft: 5,
        left: 20,
    },
    playerImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    cueImage:{
        height: 90,
        width: 90,
    },
    cardContent:{
        height: 100,
        width: 100,
        borderRadius: 50,
        right: 30,
        bottom: 10
    },
    separator:{
        height: 2,
        width: 80,
        backgroundColor: 'white'
    }
})

export default CardStyle;