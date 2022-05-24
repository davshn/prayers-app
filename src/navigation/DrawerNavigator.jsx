import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Start" component={TabNavigator} />
        </Drawer.Navigator>
    )
}