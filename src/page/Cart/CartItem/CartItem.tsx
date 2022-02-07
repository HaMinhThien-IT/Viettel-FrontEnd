import React from 'react';
import './CartItem.css'
import { IoMdRemoveCircle } from 'react-icons/io';
import { listCartItem } from '../../../model/Cart';
import { formatMoney } from '../../../helper';
type props = {
    itemCart : listCartItem
}
export default function CartItem(props:props) {
   
    return (
        <div className='containerCart'>
            
            <div className="containerCartItem">
                <div className="imageProductCartItem">
                    <img src={props.itemCart.image} alt="" />
                </div>
                <div className="nameProductCartItem">
                    Điện thoại {props.itemCart.name_trademark} {props.itemCart.product_name} {props.itemCart.ram} {props.itemCart.color}
                </div>
                <div className="actionAndPrice">
                    <IoMdRemoveCircle />
                    <div className="beforePriceProduct">
                        {formatMoney(props.itemCart.price+1000)}đ
                    </div>
                    <div className="afterPriceProduct">
                    {formatMoney(props.itemCart.price)}đ
                    </div>
                    <div className="updateQuantityProductCart">
                        <button className="updateQuantity">-</button>
                        <button className="quantity">{props.itemCart.quantity}</button>
                        <button className="updateQuantity">+</button>
                    </div>
                </div>
            </div>
            <div className="totalPrice">
                <div className="pricePrice">
                    <p className="titile">
                    Tạm tính
                    </p>
                    <div className="prices">
                    {formatMoney(props.itemCart.price*props.itemCart.quantity)}đ
                    </div>
                </div>
                <div className="pricePrice">
                    <p className="titile">
                    Khuyến mãi
                    </p>
                    <div className="prices">
                   0đ
                    </div>
                </div>
                <div className="pricePrice">
                    <p className="titile">
                    Phí vận chuyển
                    </p>
                    <div className="prices">
                    80.000đ
                    </div>
                </div>
            </div>
           
        </div>
    );
}
