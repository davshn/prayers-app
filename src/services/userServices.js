import api from "./environment";
import { VERSION } from "../constants/config";

const Route = '/user';

export const userRegister = async (userInfo) => {
    try {
        userInfo.version = VERSION;
        const newUser = await api.post(Route + '/register', userInfo);
        console.log("Registering user");
        return newUser;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const userLogin = async (userInfo) => {
    try {
        userInfo.version = VERSION;
        const user = await api.post(Route + '/login', userInfo);
        console.log("Login user");
        return user;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const userRefresh = async (token, refreshToken) => {
    try {
        api.setHeader('Token', token);
        api.setHeader('RefreshToken', refreshToken);
        const version = { version: VERSION };
        const user = await api.post(Route + '/refresh', version);
        console.log("Refreshing User");
        return user;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const userInfo = async (token) => {
    try {
        api.setHeader('Token', token);
        const user = await api.get(Route + '/info');
        console.log("Getting user");
        console.log(user)
        return user;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}

export const userEdit = async (token, userInfo) => {
    try {
        api.setHeader('Token', token);
        const user = await api.patch(Route + '/edit', userInfo);
        console.log("Edditing user");
        return user;
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
        return [`${error}`];
    }
}