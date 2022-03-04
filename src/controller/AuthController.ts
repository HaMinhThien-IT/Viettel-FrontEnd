import axios from "axios";
import { authAxios } from "../http";
import { login, User } from "../model/Auth";

let localHost: string = 'http://localhost:3002'

class AuthController {
    register(email: string, password: string) {
        return axios.post(`${localHost}/register`, { email, password })
    }
    async login(login: login) {
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
    async getListUser() {
        return authAxios.get(`${localHost}/users`).then(res => {
            return res.data
        })
    }
    async addNewUser(user:User) {
        return axios.post(`${localHost}/user`,user).then(res => {
            return res.data
        })
    }
    async updateUser( user:User) {
        return axios.put(`${localHost}/user/${user.user_id}`,user).then(res => {
            return res.data
        })
    }
    async removeUser( id:string) {
        return axios.delete(`${localHost}/user/${id}`).then(res => {
            return res.data
        })
    }

}
export const authController = new AuthController();