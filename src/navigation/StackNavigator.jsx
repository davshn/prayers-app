import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';

import Splash from '../views/Splash/Index';

const Stack = createStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}