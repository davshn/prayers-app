import { useSelector } from "react-redux";

import PrayerCard from "../../components/PrayerCard";

export default function SupportedPrayers() {
    const supportedPrayers = useSelector(state => state.supportedPrayersReducer);
    const prayers = supportedPrayers.page;
    const actualPage = supportedPrayers.currentPage;
    const totalPages = supportedPrayers.totalPages;

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