import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, Box, Button } from "native-base";

import { prayerDetailed, prayerUnsupport, prayerGetSupported, prayerSupport, prayerDelete, prayerGetOwn } from "../../services/prayerServices";
import { setSupportedPrayers } from "../../stateManagement/actions/supportedPrayersActions";
import { setOwnPrayers } from "../../stateManagement/actions/ownPrayersActions";

export default function DetailedPrayer({ route, navigation }) {
    const dispatch = useDispatch();
    const prayerId = route.params;
    const user = useSelector(state => state.authUserReducer);
    const [prayer, setPrayer] = useState({})


    async function fetchPrayer() {
        const detail = await prayerDetailed(user.token, prayerId);
        setPrayer(detail.data);
    }

    useEffect(() => { fetchPrayer() }, []);

    async function unsupportPrayer(id) {
        await prayerUnsupport(user.token, id);
        const supportedPrayers = await prayerGetSupported(user.token, 0);
        dispatch(setSupportedPrayers(supportedPrayers.data));
        navigation.goBack();
    }

    async function supportPrayer(id) {
        await prayerSupport(user.token, id);
        const supportedPrayers = await prayerGetSupported(user.token, 0);
        dispatch(setSupportedPrayers(supportedPrayers.data));
        navigation.navigate('Apoyadas')
    }

    async function deletePrayer(id) {
        await prayerDelete(user.token, id);
        const ownPrayers = await prayerGetOwn(user.token, 0);
        dispatch(setOwnPrayers(ownPrayers.data));
        navigation.navigate('Propias')
    }

    return (
        <Box h="100%" bg="white" alignItems="center" justifyContent="center">
            <Text>{prayer.title}</Text>
            <Text>{prayer.text}</Text>
            <Text>{prayer.supporters}</Text>
            {prayer.property === 'self' && <Button onPress={() => deletePrayer(prayer.id)}>Borrar</Button>}
            {prayer.property === 'self' && <Button>Editar</Button>}
            {prayer.property === 'unknown' && <Button onPress={() => supportPrayer(prayer.id)}>Apoyar</Button>}
            {prayer.property === 'supported' && <Button onPress={() => unsupportPrayer(prayer.id)}>Dejar</Button>}
        </Box>
    )
}