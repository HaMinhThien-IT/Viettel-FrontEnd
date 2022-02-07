import React, { useContext, useEffect, useState } from 'react';
import CartForm from './CartForm/CartForm';
import CartItem from './CartItem/CartItem';
import './Cart.css'
import { cartContext } from '../../store/CartContext';
import TotalPrice from './CartItem/TotalPrice';
import { order_user } from '../../model/Checkout';
import { orderController } from '../../controller/OrderController';
import { userContext } from '../../store/UserContext';
type State = {
  optionChecked: boolean,
  optionCheckAddress: boolean,
  data: order_user,
  statePayMent: boolean
}
export default function Cart() {
  const { listCart } = useContext(cartContext)
  const { order_user_id } = useContext(cartContext)
  const { id_order } = useContext(cartContext)
  const { user_id } = useContext(userContext)
  let totalPrice: number = 0;

  // useEffect(()=>{
  //   if(listCart != null){
  //     for (let i = 0; i < listCart.length || 1; i++) {
  //       totalPrice += listCart[i].price * listCart[i].quantity
  //     }
  //   }else{
  //     totalPrice = 0;
  //   }
  // },[])
  const [state, setState] = useState<State>({
    optionCheckAddress: false, optionChecked: false, data: {
      order_user_id: '',
      name_order: '',
      address: '',
      sdt: '',
    }, statePayMent: true
  })
  const sendDataCheckOut = (order_user: order_user,optionChecked: boolean,optionCheckAddress: boolean) => {
    setState({ ...state, optionChecked:optionChecked,optionCheckAddress:optionCheckAddress }) 
    orderController.checkOut(order_user, user_id, order_user_id, state.statePayMent,id_order)
  }

  useEffect(() => {
    if (!state.optionChecked && !state.optionCheckAddress) {
      setState({ ...state, statePayMent: true })
    } else if (state.optionChecked && !state.optionCheckAddress ) {
      setState({ ...state, statePayMent: false })
    }
  }, [state.optionChecked,state.optionCheckAddress])

  return <div className='containerCart1'>
    <CartForm  sendDataCheckOut={sendDataCheckOut}/>
    <div>
      <div className="titleCartItem">
        Giỏ hàng của bạn
      </div>
      {   
        listCart && listCart.map((item, index) => (
          <CartItem itemCart={item} key={index} />
        ))
      }
      <TotalPrice total={totalPrice} />
    </div>
  </div>;
}
