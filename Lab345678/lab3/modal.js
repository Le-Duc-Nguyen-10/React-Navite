import { StyleSheet, Pressable, Text, Modal, View, Image, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { stylesModal } from './stylesModal';
import { useState } from 'react';

const ViewModals = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        Alert.alert('Modal đã được đóng.');
        setModalVisible(false);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={stylesModal.container}>
                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                    <View style={stylesModal.container}>
                        <View style={stylesModal.styleModal}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Hello World!</Text>
                            <Image
                                source={require('../assets/logo.png')}
                                style={{
                                    width: 200,
                                    height: 150,
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}
                            />
                            <Pressable onPress={closeModal}>
                                <Text style={[stylesModal.decorTextShow, { textAlign: 'center' }]}>Đóng modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text style={stylesModal.decorTextShow}>Mở modal</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
export default ViewModals;
