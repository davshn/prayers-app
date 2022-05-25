import Swiper from "react-native-deck-swiper";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { useRef } from "react";

import { prayerSupport } from "../../services/prayerServices";
import { changeNextPage } from "../../stateManagement/actions/allPrayersActions";

export default function MainSwiper() {
    const dispatch = useDispatch();
    const actualPage = useSelector(state => state.allPrayersReducer.actualPage);
    const user = useSelector(state => state.authUserReducer);

    const swiperRef = useRef(null);

    function supportPrayer(id) {
        prayerSupport(user.token, id);

    }

    function nextPrayer() {
        
    }

    function getMorePrayers() {
        dispatch(changeNextPage());
        
    }


    return (
        <View style={styles.card}>
            <Swiper 
                cards={actualPage}
                renderCard={(card) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>{card.title}</Text>
                            <Text style={styles.text}>{card.text}</Text>
                            <Text style={styles.text}>{card.updatedAt}</Text>
                        </View>
                    )
                }}
                onSwipedRight={(cardIndex) => supportPrayer(actualPage[cardIndex].id)}
                onSwipedLeft={(cardIndex) => nextPrayer()}
                onSwipedAll={() => getMorePrayers()}
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