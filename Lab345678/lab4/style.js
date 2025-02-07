import { StyleSheet, StatusBar } from 'react-native';

export const style = StyleSheet.create({
    containerView: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'white',
        elevation: 7,
        padding: 15,
        borderRadius: 10,
    },
    images: {
        width: 50,
        height: 50,
    },
    contact: {
        color: 'green',
        fontWeight: 'bold',
    },
});
