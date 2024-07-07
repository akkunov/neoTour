import axios from "axios";


const baseURL= `https://neotour-production-392c.up.railway.app/api/bookings`
export const $booking = axios.create({
    baseURL
})