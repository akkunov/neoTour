import {$tours} from "../http/axios.js";
import {$booking} from "../http/booking.js";

export class Tour{
    static async getToursByCategory (category){
        return $tours(`/by-category/${category}`)
    }
    static async getToursById (id){
        return $tours(`/${id}`)
    }
    static async addBook (data){
        return $booking.post('/add', {...data})
    }
}