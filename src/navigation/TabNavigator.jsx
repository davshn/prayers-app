import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from '../views/Inicio/Index';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Start" component={Inicio} />
        </Tab.Navigator>
    )
}