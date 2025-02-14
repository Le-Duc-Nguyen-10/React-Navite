import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import { useFonts } from 'expo-font';
import { style } from './styleKeyboardAvoidingViewComponent';

const KeyboardAvoidingViewComponent = () => {
    const [fontsLoaded] = useFonts({
        YourFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={style.inner}>
                    <Text style={[style.header, { fontFamily: 'YourFont' }]}>Header</Text>
                    <TextInput placeholder="Username" style={style.textInput} />
                    <View style={style.btnContainer}>
                        <Button title="Submit" onPress={() => null} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidingViewComponent;
