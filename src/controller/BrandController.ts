import axios from "axios";
import { authAxios } from "../http";
import { brand } from "../model/Option";
let localHost: string = 'http://localhost:3002'

class BrandController {
    getListBrand() {
        return authAxios.get(`${localHost}/brands`).then(res =>{
            return res.data
        })
    }
    async addNewBrand(brand:brand) {
        return axios.post(`${localHost}/brand`,brand).then(res => {
            return res.data
        })
    }
    async updateBrand( brand:brand) {
        return axios.put(`${localHost}/brand/${brand.trademark_id}`,brand).then(res => {
            return res.data
        })
    }
    async removeBrand( id:string) {
        return axios.delete(`${localHost}/brand/${id}`).then(res => {
            return res.data
        })
    }

}
export const brandController = new BrandController();