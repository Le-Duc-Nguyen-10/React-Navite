import Home from './screen/HomeScreen';
import Deatils from './screen/DeatailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Deatils} options={{ title: 'Details Screen' }} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
