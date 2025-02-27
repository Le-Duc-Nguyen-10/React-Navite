import { View, Image, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const data = [
    {
        id: 1,
        name: 'Nike Air Force 1',
        images: require('../assets/Air-Force-1-1.png'),
        price: '2.300.000 đ',
    },
    {
        id: 2,
        name: 'Nike Air Max 90',
        images: require('../assets/Nike-Air-Max_90-1.png'),
        price: '2.400.000 đ',
    },
    {
        id: 3,
        name: 'Nike Air Max 97',
        images: require('../assets/Air-Max-97-1.png'),
        price: '2.500.000 đ',
    },
    {
        id: 4,
        name: 'Nike Blazer Low 77',
        images: require('../assets/Nike-Blazer-Low-77-1.png'),
        price: '2.600.000 đ',
    },
    {
        id: 5,
        name: 'Nike React Element 55',
        images: require('../assets/Nike-React-_Element-55-1.png'),
        price: '2.700.000 đ',
    },
    {
        id: 6,
        name: 'Nike Air Force 1',
        images: require('../assets/Air-Force-1-1.png'),
        price: '2.300.000 đ',
    },
];

const ItemRender = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.containerImages}>
                <Image source={item.images} style={styles.images} />
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
    );
};

const FirstRoute = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
        myFont2: require('../assets/fonts/Poppins-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ItemRender item={item} navigation={navigation} />}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'center', paddingHorizontal: 20, gap: 10, marginVertical: 10 }}
                contentContainerStyle={{ marginVertical: 10 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '48%',
        elevation: 5,
        backgroundColor: 'white',
    },
    containerImages: {
        width: '100%',
        height: 120,
        alignItems: 'center',
    },
    images: {
        width: '90%',
        height: '100%',
        resizeMode: 'contain',
    },
    name: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'myFont',
        flex: 1,
    },
    price: {
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 10,
        fontFamily: 'myFont2',
    },
});

export default FirstRoute;
