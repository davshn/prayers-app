import { ImageBackground } from "react-native";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Splashing from '../../../assets/splashing.png';
export default function Splash({ navigation }) {
    
    const user = useSelector(state => state.authUserReducer);
    useEffect(() => navigation.navigate('Home'), []);
    console.log(user)
    return (
        <ImageBackground source={Splashing} resizeMode="cover" style={{ height: "100%" }}/>
    )
}