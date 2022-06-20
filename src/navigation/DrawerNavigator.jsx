import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../stateManagement/actions/authUserActions'
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
    const dispatch = useDispatch();

    const endSession = () => {
        dispatch(logoutUser());
        navigation.popToTop();
    }

    return (
        <Drawer.Navigator drawerContent={(props) => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        labelStyle={{ color: 'red' }}
                        label="Cerrar sesion"
                        onPress={endSession}
                    />
                </DrawerContentScrollView>
            )
        }}>
            <Drawer.Screen name="Start" component={TabNavigator} />
        </Drawer.Navigator>
    )
}