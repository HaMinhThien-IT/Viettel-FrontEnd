import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'
import { product } from '../../../model/Product'
import { formatMoney } from '../../../helper'

interface propsProduct {
    item: product
}
export default function ProductItem(itemProps: propsProduct) {
    let path = '/dien-thoai'
    return (
        <div className='productController'>
            <Link to={path + `/${itemProps.item.product_id}`}>
                <div className="topSale">
                    Bán chạy
                </div>
                <div className="imgProduct">
                    <img src={itemProps.item.image} alt="" />
                </div>
                <h2 className="productName">
                    {`${itemProps.item.product_name}   ${itemProps.item.ram}`}
                </h2>
                <div className="priceProduct">
                    {formatMoney(itemProps.item.price_product)}đ
                </div>
                <div className="km">
                    TRẢ GÓP/THANH TOÁN: Miễn phí trả góp qua thẻ tín dụng kỳ hạn 6 hoặc 12 tháng. Trả góp 0% ...
                </div>
            </Link>
        </div>
    )
}
