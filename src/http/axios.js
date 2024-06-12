import axios from "axios";

const baseURL = `https://neotour-production-392c.up.railway.app/api`;

export const $http = axios.create({
    baseURL,
})