import api from "./environment";

const Route = '/prayer';

export const prayerGetAll = async (token, page) => {
    try {
        api.setHeader('Autentication', token);
        const prayers = await api.get(Route + '/getall' + '?' + 'size=' + '20' + '&' + 'page=' + page);
        console.log("Getting all prayers page " + page);
        return prayers;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const prayerGetOwn = async (token, page) => {
    try {
        api.setHeader('Autentication', token);
        const prayers = await api.get(Route + '/getown' + '?' + 'size=' + '10' + '&' + 'page=' + page);
        console.log("Getting own prayers page " + page);
        return prayers;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const prayerGetSupported = async (token, page) => {
    try {
        api.setHeader('Autentication', token);
        const prayers = await api.get(Route + '/getsupported' + '?' + 'size=' + '10' + '&' + 'page=' + page);
        console.log("Getting own supported page " + page);
        return prayers;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const prayerDetailed = async (token, prayerId) => {
    try {
        api.setHeader('Autentication', token);
        const prayer = await api.get(Route + '/detailed/' + prayerId);
        console.log("Getting prayer " + prayerId);
        return prayer;
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

export const prayerUnsupport = async (token, prayerId) => {
    try {
        api.setHeader('Autentication', token);
        await api.put(Route + '/unsupport/' + prayerId);
        console.log("Unsupporting prayer " + prayerId);
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const prayerDelete = async (token, prayerId) => {
    try {
        api.setHeader('Autentication', token);
        await api.delete(Route + '/delete/' + prayerId);
        console.log("Deletting prayer " + prayerId);
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}