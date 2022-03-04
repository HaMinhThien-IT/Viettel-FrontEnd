import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { orderController } from "../controller/OrderController";
import { listCartItem } from "../model/Cart";
import { userContext } from "./UserContext";

interface nameContextDefault {
    id_order: string,
    order_user_id: string,
    listCart: listCartItem[]
    onListCart: () => void,
}

const cartDefault: nameContextDefault = {
    id_order: 'null',
    order_user_id: 'null',
    listCart: [{
        product_name: '',
        productsid: '',
        price: 0,
        color: '',
        ram: '',
        quantity_order: 0,
        image: '',
        name_trademark: ''
    }],
    onListCart: () => { },
}

interface userContextProvider {
    children: ReactNode
}


export const cartContext = createContext<nameContextDefault>(cartDefault)

export default function CartContext({ children }: userContextProvider) {
    const [id_order, setId_order] = useState("")
    const [order_user_id, setOrder_user_id] = useState("")
    const [listCart, setListCart] = useState([])
    const { user_id } = useContext(userContext)


    const onListCart = () => {
        orderController.getListCart(user_id).then(res => {
            console.log(res);

            if (user_id != "") {
                if (res.listCart == undefined) {
                    setListCart([]);
                } else {
                    setListCart(res.listCart);
                }
                setId_order(res.idOrder[0].id_order);
                setOrder_user_id(res.id_order_user[0].order_user_id);
            }
        })
    }
    console.log(id_order);

    useEffect(() => {
        orderController.getListCart(user_id).then(res => {
            if (user_id != "") {
                if (listCart !== undefined) {
                    setListCart(res.listCart);
                    setId_order(res.idOrder[0].id_order);
                    setOrder_user_id(res.id_order_user[0].order_user_id);
                } else {
                    setListCart([]);
                    // setOrder_user_id(res.id_order_user[0].order_user_id);
                }
            }
        })
    }, [user_id])



    const data = { id_order, listCart, order_user_id, onListCart }
    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )
}
