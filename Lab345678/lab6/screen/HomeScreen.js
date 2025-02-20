import { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
    const [name, setName] = useState('');
    const handleNavigation = () => {
        if (name.trim() === '') {
            alert('Bạn chưa nhập tên!');
        } else {
            navigation.navigate('Details', { id: 20102005, name });
        }
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, marginBottom: 10, color: '#3498db', fontWeight: 'bold' }}>
                        Xin chào, đây là màn hình chính
                    </Text>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            width: '80%',
                            marginTop: 10,
                            borderRadius: 10,
                            padding: 15,
                            fontSize: 14,
                            marginBottom: 20,
                        }}
                        placeholder="nhập tên"
                        onChangeText={(text) => setName(text)}
                    ></TextInput>
                    <Button
                        onPress={handleNavigation}
                        title="Đi tới màn hình chi tiết"
                        style={{ fontSize: 20, color: 'green' }}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default Home;
