import { View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const data = [
    {
        id: 1,
        images: require('../assets/Air-Force-1-1.png'),
    },
    {
        id: 2,
        images: require('../assets/Nike-Air-Max_90-1.png'),
    },
    {
        id: 3,
        images: require('../assets/Air-Max-97-1.png'),
    },
    {
        id: 4,
        images: require('../assets/Nike-Blazer-Low-77-1.png'),
    },
    {
        id: 5,
        images: require('../assets/Nike-React-_Element-55-1.png'),
    },
    {
        id: 6,
        images: require('../assets/Air-Force-1-1.png'),
    },
    {
        id: 7,
        images: require('../assets/Air-Max-97-3.png'),
    },
    {
        id: 8,
        images: require('../assets/Nike-Air-Max_90-3.png'),
    },
    {
        id: 9,
        images: require('../assets/Air-Force-1-2.png'),
    },
    {
        id: 10,
        images: require('../assets/Nike-Air-Max-1-1.png'),
    },
];
const ItemRender = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImages}>
                <Image source={item.images} style={styles.images} />
            </View>
        </View>
    );
};
const SecondRoute = () => (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemRender item={item} />}
            numColumns={2}
            scrollEnabled={true}
            columnWrapperStyle={{
                justifyContent: 'center',
                gap: 10,
                marginTop: 10,
            }}
            contentContainerStyle={{ marginHorizontal: 20 }}
        />
    </View>
);
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
});
export default SecondRoute;
