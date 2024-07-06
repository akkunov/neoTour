import axios from "axios";

const baseURL = `https://neotour-production-392c.up.railway.app/api/tours`;

export const $tours = axios.create({
    baseURL,
})