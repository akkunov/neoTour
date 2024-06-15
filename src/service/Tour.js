import {$http} from "../http/axios.js";

export class Tour{
    static async getAllTours () {
        return $http('/tours');
    }
    static async getAllTourById (id) {
        return $http(`/tours/${id}`);
    }
    static async getRecommendedTours() {
        return $http(`/tours/recommended`);
    }
    static async getPopularTours() {
        return $http(`/tours/popular`);
    }
    static async getMostVisitedTours() {
        return $http(`/tours/mostVisited`);
    }
    static async getFeaturedTours() {
        return $http(`/tours/featured`);
    }
    static async getByContinentTours(continent) {
        return $http(`/tours/by-continent/${continent}`);
    }



}