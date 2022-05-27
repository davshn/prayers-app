import { useEffect,useState } from "react";
import { prayerDetailed } from "../../services/prayerServices";
import { useSelector } from "react-redux";
import { Text,Box } from "native-base";

export default function DetailedPrayer({route}) {
    const prayerId = route.params;
    const user = useSelector(state => state.authUserReducer);
    const [prayer,setPrayer]=useState({})
    
    async function fetchPrayer  ()  {
       const detail=await prayerDetailed(user.token, prayerId);
        setPrayer(detail.data);
    }
    
    useEffect(() => { fetchPrayer() }, []);
    
    return (
        <Box h="100%" bg="white" alignItems="center" justifyContent="center">
            <Text>{prayer.title}</Text>
        </Box>
    )
}