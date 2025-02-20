import { View, Text, ImageBackground, Image, StatusBar } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CustomDrawer = (props) => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
        myFont2: require('../assets/fonts/Poppins-Medium.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{
                    backgroundColor: '#8200d6',
                    paddingTop: 40,
                    paddingStart: 0,
                    paddingEnd: 0,
                    paddingBottom: 0,
                }}
            >
                <ImageBackground
                    source={require('../assets/menu-bg.jpeg')}
                    style={{ paddingVertical: 40, paddingHorizontal: 20 }}
                >
                    <Image
                        source={require('../assets/user-profile.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text style={{ color: 'white', fontFamily: 'myFont', fontSize: 18, marginTop: 5 }}>
                        Lê Đức Nguyên
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="envelope" size={14} color="#fff" style={{ paddingRight: 5 }} />
                        <Text style={{ color: 'white', fontFamily: 'myFont2', fontSize: 14 }}>
                            nguyenldpd10357@gmail.com
                        </Text>
                    </View>
                </ImageBackground>
                <View style={{ backgroundColor: 'white', flex: 1, paddingTop: 20, paddingHorizontal: 10 }}>
                    <DrawerItemList {...props}></DrawerItemList>
                </View>
            </DrawerContentScrollView>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ padding: 20, fontFamily: 'myFont', alignContent: 'center ', fontSize: 14 }}>
                    Phiên bản ứng dụng 2.6.0
                </Text>
            </View>
        </View>
    );
};

export default CustomDrawer;
