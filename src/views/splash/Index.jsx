import { ImageBackground } from "react-native";
import Splashing from '../../../assets/splashing.png';
export default function Splash() {
    
    return (
        <ImageBackground source={Splashing} resizeMode="cover" style={{ height: "100%" }}/>
    )
}