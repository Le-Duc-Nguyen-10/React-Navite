import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Text,
    View,
    TextInput,
    Button,
    Animated,
} from 'react-native';
import { style } from './styleKeyboardAvoidingViewComponent';

const KeyboardAvoidingViewComponent = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.container}
            Animated={true}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={style.inner}>
                    <Text style={style.header}>Header</Text>
                    <TextInput placeholder="username" style={style.textInput}></TextInput>
                    <View style={style.btnContainer}>
                        <Button title="Submit" onPress={() => null} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default KeyboardAvoidingViewComponent;
