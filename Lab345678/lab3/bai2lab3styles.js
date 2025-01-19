import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '95%',
        marginTop: 20,
        alignSelf: 'center',
        padding: 15,
    },
    baseText: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Cochin',
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontStyle: 'italic',
    },
    tipStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 10,
    },
});
