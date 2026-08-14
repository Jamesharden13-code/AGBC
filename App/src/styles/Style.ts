import { StyleSheet } from "react-native";

export const COLORS = {
    active: ['#5B9874FF', '#1E3226'],
    inactive: ['#D1D1D1', '#AFAFAF'],
    alert: ['#FF4D4D', '#A30000'],
};

export const Style = StyleSheet.create({


    // --- LAYOUT UTILS ---
    mainContainer: {
        flex: 1,
    },
    row: {
        flexDirection: 'row'
    },
    rowGap: {
        flexDirection: 'row',
        gap: 10
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignRight:{
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    screenContainer: {
        position: 'relative',
        backgroundColor: '#ffffff',
        flex: 1
    },
    listSection: {
        flex: 1,
        position: 'relative',
        alignSelf: 'center',
        top: 20,
        width: '90%'
    },
    formContainer: {
        height: '100%',
        width: '90%',
    },
    stepContainer: {
        width: '90%'
    },
   
    // --- SPACING ---
    mb10: { marginBottom: 10 },
    pt10: { paddingTop: 10 },
    pt30: { paddingTop: 30 },
    g20: { gap: 20},
    mr20: { marginRight: 20 },

    // --- TEXT STYLES ---
    fontSerif: { fontFamily: 'DMSerifDisplay-Regular'},
    textBold: { fontWeight: 'bold' },
    textWhite:{ color: '#ffffff' },
    textGray:{ color: '#D1D1D1' },
    textCenter: { textAlign: 'center' },
    titleMs: { fontSize: 25, },
    titleLarge: { fontSize: 28 },
    titleMedium: { fontSize: 22 },
    titleSmall: { fontSize: 18 },
    textXSmall: { fontSize: 11 },

    // --- NAVIGATION TOP ---
    divTopNavigation : {
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    iconCircle: {
        padding: 5,
        backgroundColor: '#ffffff',
        borderRadius: 40, 
        height: 40,
        width: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }, 

    // --- IMAGES & LOGOS ---
    smallImg:{
        height: 30,
        width: 30
    },
    outerCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: '#ffffff',
        backgroundColor: '#000',
    },
    bigCircle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 4,
    },
    gameImage: {
        height: 200,
        width: 350,
        borderRadius: 15,
        resizeMode: "cover",
    },
    largeLogo: {
        height: 200,
        width: 200
    },

    // --- COMPONENTS (CAROUSEL / TABS) ---
    divCaroussel: {
        height: 250,
        borderRadius: 15,
        overflow: "hidden",
        gap: 20,
    },
    gameInfoOverlay: {
        position: 'absolute', 
        width: 350,
        borderRadius: 15,
        justifyContent: 'center',
    },
    carouselDot : {
        backgroundColor: '#aaa',
        height: 8,
        width: 8,
        marginHorizontal: 2,
        borderRadius: 8,
    },
    iconContainer: {
        position: 'absolute',
        right: 24,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})

// export default Style;