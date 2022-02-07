import React from 'react';
import { formatMoney } from '../../../helper';
import './TotalPrice.css'
type props ={
    total:number
}
export default function TotalPrice(props:props) {
  return <>
       <div className="totalPriceSuccess">
                <div className="titleTotalPriceSuccess">
                Tổng tiền
                </div>
                <div className="priceTotalPriceSuccess">
                {formatMoney(props.total)}đ
                </div>
            </div>
            <div className="phiAvt">
            * Giá trên đã bao gồm VAT và phí vận chuyển.
            </div>
  </>;
}
