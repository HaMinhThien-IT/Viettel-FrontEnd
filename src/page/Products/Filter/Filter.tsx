import React, { useState } from 'react'
import './Filter.css'
type props =  {
    handleAddrTypeChange:(orderBy:string) =>void
}
export default function Filter(props:props) {
   
    function handleAddrTypeChangex(e:any) { 
        props.handleAddrTypeChange(e.target.value)
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                        
    return (
        <div className='container'>
            <div className="containerFilterC1">
                <ul className="containerFilterItem">
                    <li className="titleFilter">
                        <h1 className="titleFilterH1">
                            Điện thoại
                        </h1>
                    </li>
                    <li className="itemFilter">Dưới 1 triệu</li>
                    <li className="itemFilter">Từ 1 triệu - 3 triệu</li>
                    <li className="itemFilter">Từ 3 triệu đến 7 triệu</li>
                    <li className="itemFilter">Từ 7 triệu đến 10 triệu</li>
                    <li className="itemFilter">Từ 10 triệu đến 15 triệu</li>
                    <li className="itemFilter">Trên 15 triệu</li>
                </ul>
                <div className="selectOption">
                    <select name="" id="" onClick={handleAddrTypeChangex} >
                        <option value="DESC">Giá từ cao đến thấp</option>
                        <option value="ASC">Giá từ thấp đến cao</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
