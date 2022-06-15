import { ImageBackground } from "react-native";
import { useEffect } from "react";
import * as Device from 'expo-device';
import { useDispatch, useSelector } from "react-redux";

import Splashing from '../../../assets/splashing.png';

import { prayerGetAll, prayerGetSupported, prayerGetOwn } from "../../services/prayerServices";
import { userRefresh, getUserInfo } from "../../services/userServices";

import { loginUser, logoutUser } from "../../stateManagement/actions/authUserActions";
import { setUserInfo } from "../../stateManagement/actions/userInfoActions";
import { setActualPage, setNextPage } from "../../stateManagement/actions/allPrayersActions";
import { setSupportedPrayers } from "../../stateManagement/actions/supportedPrayersActions";
import { setOwnPrayers } from "../../stateManagement/actions/ownPrayersActions";

export default function Splash({ navigation }) {
    const dispatch = useDispatch();
    const deviceInfo = Device.totalMemory + Device.osBuildId;
    const user = useSelector(state => state.authUserReducer);

    useEffect(() => {
        getUserInformation(user.token);
    }, []);

    async function getUserInformation(token) {
        const userInformation = await getUserInfo(token);
        if (userInformation.ok) {
            dispatch(setUserInfo(userInformation.data));
            getPrayers();
        }
        else await refreshUserToken();
    }

    async function refreshUserToken() {
        const userRefreshed = await userRefresh(user.token, deviceInfo);
        if (userRefreshed.ok) {
            dispatch(loginUser(userRefreshed.data));
            await getUserInformation(userRefreshed.data.token);
        }
        else dispatch(logoutUser());
    }

    async function getPrayers() {
        const [allActualPrayers, allNextPrayers, supportedPrayers, ownPrayers] = await Promise.all([
            prayerGetAll(user.token, 0),
            prayerGetAll(user.token, 1),
            prayerGetSupported(user.token, 0),
            prayerGetOwn(user.token, 0),
        ]);
        dispatch(setActualPage(allActualPrayers.data));
        dispatch(setNextPage(allNextPrayers.data));
        dispatch(setSupportedPrayers(supportedPrayers.data));
        dispatch(setOwnPrayers(ownPrayers.data));
        navigation.navigate('Home');
    }

    return (
        <ImageBackground source={Splashing} resizeMode="cover" style={{ height: "100%" }} />
    )
}