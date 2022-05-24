import api from "./environment";

const Route = '/prayer';
const Size = '10';

export const prayerGetAll = async (page) => {
    try {
        const prayers = await api.get(Route + '/getall' + '?' + 'size=' + Size + '&' + 'page' + page);
        console.log("Getting all prayers page "+page);
        console.log(prayers);
        return prayers;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}