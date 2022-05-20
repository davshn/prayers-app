import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';

import Splash from '../views/Splash';
import SingUp from '../views/SingUp';
import Main from '../views/Main';

const Stack = createStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SingUp" component={SingUp} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}