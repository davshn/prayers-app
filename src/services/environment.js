import { create } from "apisauce";
import { BASEURL, VERSION } from "../constants/config";

const api = create({
    baseURL: BASEURL,
    headers: {
        "Cache-Control": "no-cache",
        Accept: "application/json",
        Version: VERSION,
        "Content-Type": "application/json",
        credentials: 'same-origin'
    },
    timeout: 15000
});

export default api;