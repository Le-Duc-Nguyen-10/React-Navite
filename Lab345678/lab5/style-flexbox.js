import { StyleSheet, StatusBar } from 'react-native';
export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        position: 'relative',
        padding: 10,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    containerheader: {
        padding: StatusBar.currentHeight,
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    images: {
        width: 26,
        height: 26,
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: '75%',
    },
    title: {
        color: '#ffffff',
        fontFamily: 'myFont',
        fontSize: 22,
        textTransform: 'uppercase',
    },
    star: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'myFont',
    },
    favoriteButton: {
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        position: 'absolute',
        padding: 10,
        top: -20,
        right: 20,
        elevation: 5,
    },
    containerBody: {
        backgroundColor: 'white',
        padding: 20,
        position: 'relative',
    },
    location: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007bff',
        fontFamily: 'myFont',
    },
    info: {
        fontFamily: 'myFont',
        marginVertical: 10,
        fontSize: 16,
    },
    content: {
        fontSize: 14,
        fontFamily: 'myFontSecond',
    },
    price: {
        fontSize: 20,
        fontFamily: 'myFont',
        color: 'white',
    },
    perDay: {
        fontSize: 14,
        color: 'white',
    },
    bookButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    bookButtonText: {
        color: '#007bff',
        fontFamily: 'myFont',
        fontSize: 14,
    },
    containerFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#007bff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
});
