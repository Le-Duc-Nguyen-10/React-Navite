import { StyleSheet, Text, View, TextInput } from 'react-native';
import { styles } from './bai2lab3styles';
import { useState } from 'react';
const Bai2Lab3 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ marginTop: 40 }}>
            <TextInput value={name} onChangeText={setName} placeholder="Nhập họ tên" style={styles.tipStyle} />
            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Nhập số điện thoại"
                style={styles.tipStyle}
                keyboardType="phone-pad"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Nhập mật khẩu"
                style={styles.tipStyle}
                secureTextEntry={true}
            />
            <View style={styles.container}>
                <Text style={styles.baseText}>
                    Em vào đời bằng <Text style={[styles.boldText, { color: 'red' }]}>vang đỏ aaa</Text>
                    anh vào đời bằng <Text style={[styles.boldText, { color: 'yellow' }]}>nước trà</Text>
                </Text>
                <Text style={styles.baseText}>
                    Bằng cơn mưa thơm{' '}
                    <Text style={[styles.boldText, { fontSize: 20 }, styles.italicText]}>mùi đất </Text>
                    <Text>
                        {' '}
                        và <Text style={[styles.italicText, { fontSize: 10 }]}>bằng hoa dại mọc trước nhà</Text>
                    </Text>
                </Text>
                <Text style={[styles.baseText, styles.boldText, styles.italicText, { color: 'gray' }]}>
                    Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ{' '}
                </Text>
                <Text style={styles.baseText}>
                    Lý trí em là{' '}
                    <Text style={{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }}>
                        {' '}
                        công cụ{' '}
                    </Text>
                    còn trái tim anh là
                    <Text style={{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }}>
                        {' '}
                        động cơ{' '}
                    </Text>
                </Text>
                <Text style={[styles.baseText, { textAlign: 'right' }]}>
                    Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
                </Text>
                <Text style={[styles.baseText, { textAlign: 'center', fontWeight: 'bold', color: 'orange' }]}>
                    Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
                </Text>
                <Text style={[styles.baseText, { color: 'black', fontWeight: 'bold' }]}>
                    Em vào đời bằng <Text style={{ color: 'white' }}>mây trắng</Text> em vào đời bằng{' '}
                    <Text style={{ color: 'yellow' }}>nắng xanh</Text>
                </Text>
                <Text style={[styles.baseText, { color: 'black', fontWeight: 'bold' }]}>
                    Em vào đời bằng <Text style={{ color: 'yellow' }}>đại lộ</Text> và con đường đó giờ{' '}
                    <Text style={{ color: 'white' }}>vắng anh</Text>
                </Text>
                ư
            </View>
        </View>
    );
};
export default Bai2Lab3;
