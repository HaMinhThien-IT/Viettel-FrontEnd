import { CartModels } from "./Cart";

export interface Order {
    id_order: string,
    user_id: string,
    time_order: string,
    status_order: boolean,
    isTemporary: boolean
}
export interface order_user{
    order_user_id:string,
    name_order:string,
    address:string,
    sdt:string,
}
export interface OrderWithDetail extends Order {
    orderProducts: CartModels[],
    user: order_user
}

export interface OrderAdmin {
    id_order: string,
    user_id: string,
    time_order: string,
    status_order: boolean,
    isTemporary: boolean
    email :string
}
export interface OrderWithAdmin extends OrderAdmin {
    orderProducts: CartModels[],
    user: order_user
}