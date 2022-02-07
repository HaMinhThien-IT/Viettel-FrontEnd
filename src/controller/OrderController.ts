import axios from "axios";

import { CartModel } from "../model/Cart";
import { order_user } from "../model/Checkout";

let localHost: string = 'http://localhost:3002'

class OrderController {
    getListCart(user_id:string) {
  
        return axios.post(`${localHost}/getListCart`, {user_id}).then(res =>{
            return res.data
        })
    }
    addToCart (id_order:string,addToCartModel : CartModel){
        return axios.post(`${localHost}/addToCart`,{id_order,addToCartModel})
    }
    checkOut(checkoutUser: order_user,user_id:string,order_user_id:string,statePayMent:boolean,id_order:string){
        console.log(checkoutUser);
        
        return axios.post(`${localHost}/checkout`,{checkoutUser,user_id,order_user_id,statePayMent,id_order})
    }
   

}
export const orderController = new OrderController();