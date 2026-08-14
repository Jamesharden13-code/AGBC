
import { StyleSheet } from "react-native";

const inputStyle= StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 10,
        padding: 1.2,
        elevation: 8,           
        overflow: 'visible',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    innerContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        height: 50
    },
    labelContainer: {
        position: 'absolute',
        left: 14,
        right: 14,
        zIndex: 10,
    }
})

export default inputStyle;