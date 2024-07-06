import {$tours} from "../http/axios.js";

export class Tour{
    static async getToursByCategory (category){
        return $tours(`/by-category/${category}`)
    }
    static async getToursById (id){
        return $tours(`/${id}`)
    }
}