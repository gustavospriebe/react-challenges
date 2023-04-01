import axios from "axios";

export const api = axios.create({
    baseURL: "https://crudcrud.com/api/3da8267d988445b588da4321f658aed5",
    timeout: 10000,
});
