import api from "./environment";

const Route = '/prayer';
const Size = '10';

export const prayerGetAll = async (token, page) => {
    try {
        api.setHeader('Autentication', token);
        const prayers = await api.get(Route + '/getall' + '?' + 'size=' + Size + '&' + 'page=' + page);
        console.log("Getting all prayers page " + page);
        return prayers;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const prayerSupport = async (token, prayerId) => {
    try {
        api.setHeader('Autentication', token);
        await api.put(Route + '/support/' + prayerId);
        console.log("Supporting prayer " + prayerId);
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}