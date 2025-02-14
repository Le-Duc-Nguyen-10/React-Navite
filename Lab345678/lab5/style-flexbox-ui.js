import { StyleSheet } from 'react-native';
export const styleFlexBox = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    containerText: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        marginHorizontal: 30,
    },
    title: {
        color: '#ffffff',
        fontFamily: 'myFont',
        textTransform: 'capitalize',
        textAlign: 'left',
        fontSize: 26,
    },
    content: {
        color: '#ffffff',
        fontSize: 14,
    },
    containerButton: {
        backgroundColor: '#ffffff',
        marginTop: 30,
        borderRadius: 3,
    },
    textButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontFamily: 'myFont',
    },
});
