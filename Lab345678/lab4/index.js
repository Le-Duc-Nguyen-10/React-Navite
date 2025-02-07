import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native';
import { style } from './style';

const DATA = [
    {
        id: 1,
        name: 'Lê Đức Nguyên',
        position: 'Mobile Application Development',
        photo: require('../assets/logo_contact.png'),
    },
    {
        id: 2,
        name: 'Lê Đức Nguyên',
        position: 'Mobile Application Development',
        photo: require('../assets/logo_contact.png'),
    },
    {
        id: 3,
        name: 'Lê Đức Nguyên',
        position: 'Mobile Application Development',
        photo: require('../assets/logo_contact.png'),
    },
];

const ContactItems = ({ contact }) => (
    <View style={[style.containerView, contact.id !== 1 && { marginTop: 0 }]}>
        <View style={style.container}>
            <Image source={contact.photo} style={style.images} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>{contact.name}</Text>
                <Text>{contact.position}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Calling...')}>
                <Text style={style.contact}>Call</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const viewItems = () => {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <ContactItems contact={item} />}
                keyExtractor={(item) => item.id}
                onScrollAnimationEnd={true}
            />
        </View>
    );
};

export default viewItems;
