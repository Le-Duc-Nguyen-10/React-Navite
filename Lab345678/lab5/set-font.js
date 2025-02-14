import { View, Text } from 'react-native';
import { styleSetFont } from './style-set-font';
import { useFonts } from 'expo-font';
const BodySetFont = () => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styleSetFont.container}>
            <Text style={styleSetFont.content}>
                React Native là một framework do công ty công nghệ Facebook phát triển
            </Text>
        </View>
    );
};
export default BodySetFont;
