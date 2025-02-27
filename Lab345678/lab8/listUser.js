import React, { useState, useEffect } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native-gesture-handler';

const ListUser = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const getAPI = async () => {
        try {
            const url = 'http://10.0.2.2:3000/users';
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const url = `http://10.0.2.2:3000/users/${id}`;
            const response = await fetch(url, { method: 'DELETE' });
            if (response.ok) {
                getAPI();
            }
        } catch (error) {
            console.error('Lỗi khi xoá người dùng:', error);
        }
    };

    const handleUpdate = (data) => {
        console.log('update', data);
        setSelectedUser(data);
        setOpenDialog(true);
    };

    useEffect(() => {
        const focusHandler = navigation.addListener('focus', getAPI);
        return focusHandler;
    }, [navigation]);

    return (
        <ScrollView>
            <TouchableOpacity style={styles.buttonNew} onPress={() => navigation.navigate('AddUser')} activeOpacity={1}>
                <Text style={styles.buttonTextNew}>Add New User</Text>
            </TouchableOpacity>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <View style={styles.containerText}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.birthday}>{item.birthday}</Text>
                        </View>

                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button} onPress={() => handleUpdate(item)}>
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>Không có dữ liệu</Text>
            )}
            <Modal visible={openDialog} transparent={true}>
                <UpdateModel setOpenDialog={setOpenDialog} getAPI={getAPI} selectedUser={selectedUser}></UpdateModel>
            </Modal>
        </ScrollView>
    );
};

const UpdateModel = (props) => {
    const [name, setName] = useState(undefined);
    const [birthday, setBirthday] = useState(undefined);
    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name);
            setBirthday(props.selectedUser.birthday);
        }
    }, [props.selectedUser]);
    const updateUser = async () => {
        const id = props.selectedUser.id;
        const url = `http://10.0.2.2:3000/users/${id}`;

        let response = await fetch(url, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, birthday }),
        });
        response = await response.json();
        if (response) {
            props.getAPI();
            props.setOpenDialog(false);
        }
    };
    return (
        <View style={styles.containerModel}>
            <View style={styles.overlay} />
            <View style={styles.modelContent}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter birthday"
                    value={birthday}
                    onChangeText={(text) => setBirthday(text)}
                />

                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={updateUser}>
                        <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => props.setOpenDialog(false)}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ListUser;
