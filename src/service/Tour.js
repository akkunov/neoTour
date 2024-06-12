import {$http} from "../http/axios.js";

export class Tour{
    static async getAllTours () {
        return $http('/tours');
    }
}