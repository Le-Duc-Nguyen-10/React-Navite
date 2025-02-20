import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import ProfileScreen from '../lab6/screen/ProfileScreen';
import MessagesScreen from '../lab6/screen/MessagesScreen';
import MomentsScreen from '../lab6/screen/MomentsScreen';
import SettingsScreen from '../lab6/screen/SettingScreen';
import Home from './screen/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-Medium.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerLabelStyle: { fontFamily: 'myFont', fontSize: 15 },
                drawerActiveBackgroundColor: '#8200d6',
                drawerActiveTintColor: '#fff',
                drawerType: 'slide',
                drawerInactiveTintColor: '#333',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
                }}
            ></Drawer.Screen>
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />,
                }}
            ></Drawer.Screen>
            <Drawer.Screen
                name="Message"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="chatbox-outline" size={22} color={color} />,
                }}
            ></Drawer.Screen>
            <Drawer.Screen
                name="Moment"
                component={MomentsScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="timer-outline" size={22} color={color} />,
                }}
            ></Drawer.Screen>
            <Drawer.Screen
                name="Setting"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="settings-outline" size={22} color={color} />,
                }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    );
};
export default DrawerNavigation;
