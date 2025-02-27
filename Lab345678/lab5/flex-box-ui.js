import { ImageBackground, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { styleFlexBox } from './style-flexbox-ui';
import { useFonts } from 'expo-font';
const FlexBoxView = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ImageBackground style={styleFlexBox.container} source={require('../assets/image.png')}>
                <View style={styleFlexBox.overlay} />
                <View style={styleFlexBox.containerText}>
                    <Text style={styleFlexBox.title}>discover</Text>
                    <Text style={styleFlexBox.title}>world with us</Text>
                    <Text style={styleFlexBox.content}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s
                    </Text>
                    <TouchableOpacity
                        style={styleFlexBox.containerButton}
                        activeOpacity={1}
                        onPress={() => navigation.navigate('BottomTabs')}
                    >
                        <Text style={styleFlexBox.textButton}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    );
};
export default FlexBoxView;
