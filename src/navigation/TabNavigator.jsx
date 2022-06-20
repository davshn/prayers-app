import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Start from '../views/Start';
import SupportedPrayers from '../views/SupportedPrayers';
import OwnPrayers from '../views/OwnPrayers';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Inicio" component={Start} />
            <Tab.Screen name="Apoyadas" component={SupportedPrayers} />
            <Tab.Screen name="Propias" component={OwnPrayers} />
        </Tab.Navigator>
    )
}