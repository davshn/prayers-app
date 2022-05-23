import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";

import DrawerNavigator from './DrawerNavigator';

import Splash from '../views/Splash';
import SingUp from '../views/SingUp';
import SingIn from '../views/SingIn';
import Main from '../views/Main';

const Stack = createStackNavigator();

export default function StackNavigator() {

    const user = useSelector(state => state.authUserReducer);

    console.log(user)

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user?.isAuthenticated ? (
                <>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Home" component={DrawerNavigator} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="SingUp" component={SingUp} />
                    <Stack.Screen name="SingIn" component={SingIn} />
                </>
            )}
        </Stack.Navigator>
    )
}