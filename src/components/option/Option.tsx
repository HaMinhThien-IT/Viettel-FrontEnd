import React from 'react'
import { formatMoney } from '../../helper'
import './Option.css'
type props = {
    name : string,
    ram:string,
    price:number
}
export default function Option(props:props) {
    return (
        <div className='labelOption'>
            <div className="nameOption">
                {props.name}
            </div>
            <div className='ramOption'>
                {props.ram}
            </div>
            <div className='priceOption'>
                {formatMoney(props.price)}
            </div>
        </div>
    )
}
