import 'react-native-gesture-handler';
import StackNavigation from './lab6/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation></StackNavigation>
        </NavigationContainer>
    );
};

export default App;
