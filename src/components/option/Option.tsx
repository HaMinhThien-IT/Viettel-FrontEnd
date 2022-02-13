import React from 'react'
import { formatMoney } from '../../helper'
import './Option.css'
type props = {
    name: string,
    ram: string,
    price: number,
    id: number,
    getValue: (id: number) => void

}
export default function Option(props: props) {
    return (
        <>
        <button className='btnOp' value={props.id} onClick={() => props.getValue(props.id)}>
            <div className="nameOption">
                <strong>{props.ram}B</strong>
            </div>
            <div className='priceOption'>
                {formatMoney(props.price)}đ
            </div>
        </button>
        </>

    )
}
