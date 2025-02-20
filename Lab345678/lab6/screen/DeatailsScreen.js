import { View, Text, Button } from 'react-native';

const Deatils = ({ route, navigation }) => {
    const { id, name } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View>
                <Text style={{ marginHorizontal: 30, fontSize: 16, fontWeight: 'bold' }}>Chào bạn : {name}</Text>
                <Text style={{ marginHorizontal: 30, fontSize: 16, fontWeight: 'bold' }}>ID của bạn là : {id}</Text>
            </View>
            <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                <Button title="TRỞ LẠI BẰNG-GOBACK-" onPress={() => navigation.goBack()} />
                <Button title="TRỞ LẠI BẰNG-RESET-" onPress={() => navigation.reset({ routes: [{ name: 'Home' }] })} />
                <Button title="TRỞ LẠI BẰNG-POP-" onPress={() => navigation.pop()} />
                <Button title="TRỞ LẠI BẰNG-POPTOTOP" onPress={() => navigation.popToTop()} />
            </View>
        </View>
    );
};
export default Deatils;
