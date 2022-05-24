import { ImageBackground } from "react-native";
import { useEffect } from "react";
import * as Device from 'expo-device';
import { useDispatch, useSelector } from "react-redux";

import Splashing from '../../../assets/splashing.png';

import { prayerGetAll } from "../../services/prayerServices";
import { userRefresh, getUserInfo } from "../../services/userServices";

import { loginUser, logoutUser } from "../../stateManagement/actions/authUserActions";
import { setUserInfo } from "../../stateManagement/actions/userInfoActions";

export default function Splash({ navigation }) {
    const dispatch = useDispatch();
    const deviceInfo = Device.totalMemory + Device.osBuildId;
    const user = useSelector(state => state.authUserReducer);

    useEffect(() => {
        getUserInformation();
        getPrayers();
    }, []);

    async function getUserInformation() {
        const userInformation = await getUserInfo(user.token);
        if (userInformation.ok) dispatch(setUserInfo(userInformation.data)); 
        else {
            await refreshUserToken();
        }
    }
    
    async function refreshUserToken() {
        const userRefreshed = await userRefresh(user.token, deviceInfo);
        if (userRefreshed.ok) {
            dispatch(setUserInfo(loginUser(userRefreshed.data)));
            await getUserInformation();
        }
        else dispatch(logoutUser());
    }

    async function getPrayers() {
        const allInitialPrayers = await prayerGetAll(0);
        navigation.navigate('Home');
    }
    
    return (
        <ImageBackground source={Splashing} resizeMode="cover" style={{ height: "100%" }} />
    )
}