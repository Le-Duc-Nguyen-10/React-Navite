import { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';

const AddUser = ({ navigation }) => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');

    const saveData = async () => {
        if (!name.trim() || !birthday.trim()) {
            console.warn('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        const url = `http://10.0.2.2:3000/users`;
        let result = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, birthday }),
        });
        result = await result.json();
        if (result) {
            console.log('Thêm người dùng thành công');
            navigation.navigate('ListUser', { data: result });
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
                style={{ borderBottomWidth: 1, borderColor: 'gray', marginHorizontal: 20, marginVertical: 10 }}
            />
            <TextInput
                value={birthday}
                onChangeText={setBirthday}
                placeholder="Enter birthday"
                style={{ borderBottomWidth: 1, borderColor: 'gray', marginHorizontal: 20, marginVertical: 10 }}
            />
            <TouchableOpacity
                style={{ marginHorizontal: 20, marginVertical: 10 }}
                activeOpacity={0.7}
                onPress={saveData}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        backgroundColor: 'blue',
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}
                >
                    Add User
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddUser;
