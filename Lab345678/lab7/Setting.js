import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Settings = () => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View
                style={{
                    alignItems: 'center',
                    borderColor: '#007AFF',
                    borderWidth: 1,
                    margin: 20,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    position: 'relative',
                    marginTop: 60,
                    borderRadius: 15,
                }}
            >
                <Image
                    source={require('../assets/user-profile.jpg')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        position: 'absolute',
                        top: -50,
                    }}
                />
                <Text style={{ fontSize: 16, textTransform: 'uppercase', fontFamily: 'myFont', marginTop: 50 }}>
                    le duc nguyen
                </Text>
                <Text style={{ fontFamily: 'myFont', fontSize: 14 }}>ID : 220011122</Text>
            </View>
            <View
                style={{
                    elevation: 5,
                    marginHorizontal: 20,
                    backgroundColor: 'white',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    marginTop: 10,
                }}
            >
                <Text style={{ fontFamily: 'myFont', color: '#007AFF' }}>Edit profile</Text>
            </View>
            <View
                style={{
                    elevation: 5,
                    marginHorizontal: 20,
                    backgroundColor: 'white',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    marginTop: 15,
                }}
            >
                <Text style={{ fontFamily: 'myFont', color: '#007AFF' }}>Change Password</Text>
            </View>
            <View
                style={{
                    elevation: 5,
                    marginHorizontal: 20,
                    backgroundColor: 'white',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    marginTop: 15,
                }}
            >
                <Text style={{ fontFamily: 'myFont', color: '#007AFF' }}>Logout</Text>
            </View>
        </View>
    );
};
export default Settings;
