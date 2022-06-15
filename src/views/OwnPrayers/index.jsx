import { useSelector } from "react-redux";

import PrayerCard from "../../components/PrayerCard";

export default function OwnPrayers() {
    const ownPrayers = useSelector(state => state.ownPrayersReducer);
    const prayers = ownPrayers.page;
    const actualPage = ownPrayers.currentPage;
    const totalPages = ownPrayers.totalPages;

    return (
        <>
            {prayers.map((prayer) => <PrayerCard
                key={prayer.id}
                id={prayer.id}
                image={prayer.profileImage}
                title={prayer.title}
                text={prayer.text}
            />)}
        </>
    )
}