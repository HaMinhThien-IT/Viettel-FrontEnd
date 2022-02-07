import axios from "axios";
import { authAxios } from "../http";
import { login } from "../model/Auth";

let localHost: string = 'http://localhost:3002'

class AuthController {
    register(email: string, password: string) {
        return axios.post(`${localHost}/register`, { email, password })
    }
    async  login(login: login) {
        return axios.post(`${localHost}/login`, login).then(res => {
            return res.data
        })
    }
    async getMe() {
        return authAxios.get(`/getMe`).then(res => {
          if( res.data !== undefined){
               return res.data
          }       
        })
    }

}
export const authController = new AuthController();