import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ListUser from './listUser';
import AddUser from './addUser';
const Stack = createStackNavigator();
const Crud = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ListUser" component={ListUser} />
                <Stack.Screen name="AddUser" component={AddUser} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Crud;
