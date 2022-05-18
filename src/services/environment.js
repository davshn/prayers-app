import { create } from "apisauce";
import { BASEURL } from "../constants/CONFIG";

const api = create({
    baseURL: BASEURL,
    headers: {
        "Cache-Control": "no-cache",
        Accept: "application/json; version=0",
        "Content-Type": "application/json",
        credentials: 'same-origin'
    },
    timeout: 15000
});

export default api;