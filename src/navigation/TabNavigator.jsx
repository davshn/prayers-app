import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Start from '../views/Start';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Inicio" component={Start} />
        </Tab.Navigator>
    )
}