import { Text, Box } from "native-base";
import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function PrayerCard({id,title,image,text,}) {
    const navigation = useNavigation();
    
    function goToDetail(id) {
        navigation.navigate('DetailedPrayer', id);
    }
    
    return (
        <Box>
            <TouchableOpacity onPress={() => goToDetail(id)}>
                <Text>{title}</Text>
                <Text>{text}</Text>
            </TouchableOpacity>
        </Box>
    )
}