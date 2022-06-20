import Swiper from "react-native-deck-swiper";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { prayerSupport, prayerGetAll, prayerGetSupported } from "../../services/prayerServices";
import { changeNextPage, setNextPage } from "../../stateManagement/actions/allPrayersActions";
import { setSupportedPrayers } from "../../stateManagement/actions/supportedPrayersActions";

export default function MainSwiper() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const actualPage = useSelector(state => state.allPrayersReducer.actualPage);
    const nextPage = useSelector(state => state.allPrayersReducer.nextPage);
    const currentPage = useSelector(state => state.allPrayersReducer.currentPage);
    const user = useSelector(state => state.authUserReducer);

    async function supportPrayer(id) {
        await prayerSupport(user.token, id);
        const supportedPrayers = await prayerGetSupported(user.token, 0);
        dispatch(setSupportedPrayers(supportedPrayers.data));
    }

    const nextPrayer = () => {

    }

    const getMorePrayers = async () => {
        if (nextPage?.length > 0) {
            const newPage = await prayerGetAll(user.token, currentPage + 2);
            dispatch(changeNextPage());
            dispatch(setNextPage(newPage.data));
        }
    }

    function goToDetail(id) {
        navigation.navigate('DetailedPrayer', id);
    }


    return (
        <View style={styles.card}>
            <Swiper
                cards={actualPage || []}
                renderCard={(card) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>{card?.title}</Text>
                            <Text style={styles.text}>{card?.text}</Text>
                            <Text style={styles.text}>{card?.updatedAt}</Text>
                            <Button title="detalle" onPress={() => goToDetail(card.id)} />
                        </View>
                    )
                }}
                onSwipedRight={(cardIndex) => supportPrayer(actualPage[cardIndex].id)}
                key={currentPage}
                onSwipedLeft={nextPrayer}
                onSwipedAll={getMorePrayers}
                backgroundColor={'#4FD0E9'}
                stackSize={2}
                verticalSwipe={false}
            >
                <Text style={styles.text}>No quedan mas </Text>
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    title: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        backgroundColor: "transparent"
    }
});