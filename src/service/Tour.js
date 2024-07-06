import {$tours} from "../http/axios.js";

export class Tour{
    static async getToursByCategory (category){
        return $tours(`/${category}`)
    }
    static async getToursById (id){
        return $tours(`/${id}`)
    }
}