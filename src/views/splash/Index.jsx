import { ImageBackground } from "react-native";
import { useEffect } from "react";

import Splashing from '../../../assets/splashing.png';

export default function Splash({ navigation }) {
    
    
    useEffect(() => navigation.navigate('Home'), []);
    return (
        <ImageBackground source={Splashing} resizeMode="cover" style={{ height: "100%" }}/>
    )
}