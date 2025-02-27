import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Settings from './Setting';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import TabViewExample from './TabView';

const Tabs = createBottomTabNavigator();
const CustomTabButton = ({ children, onPress, accessibilityState }) => {
    const focused = accessibilityState?.selected;
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                margin: 5,
                backgroundColor: focused ? '#5B9EE1' : 'transparent',
                paddingVertical: 10,
                flexDirection: 'row',
                paddingHorizontal: 15,
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    );
};
const BottomTabs = () => {
    const [fontsLoaded] = useFonts({
        myFont: require('../assets/fonts/Poppins-SemiBold.ttf'),
        myFont2: require('../assets/fonts/Poppins-Medium.ttf'),
    });

    // Chờ load font trước khi render UI
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'myFont',
                },
                tabBarStyle: {
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarItemStyle: {
                    borderRadius: 20,
                    margin: 5,
                    paddingVertical: 5,
                },
                animation: 'shift',
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#A8A6A7',
            }}
        >
            <Tabs.Screen
                name="Home"
                component={TabViewExample}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
                    tabBarButton: (props) => <CustomTabButton {...props} />,
                }}
            ></Tabs.Screen>

            <Tabs.Screen
                name="Setting"
                component={Settings}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={22} color={color} />,
                    tabBarButton: (props) => <CustomTabButton {...props} />,
                }}
            ></Tabs.Screen>
        </Tabs.Navigator>
    );
};
export default BottomTabs;
