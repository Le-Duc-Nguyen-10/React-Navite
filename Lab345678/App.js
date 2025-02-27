import 'react-native-gesture-handler';
import StackNavigation from './lab6/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './lab7';
import FlexBoxView from './lab5/flex-box-ui';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FlexBoxView" component={FlexBoxView} />
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
