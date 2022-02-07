import React from 'react'
import './Menu.css'
import { ImDropbox } from 'react-icons/im';
export default function Menu() {
    return (
       <div className='containerMenu'>
            <div className="logoMenu"><img src="https://zuramai.github.io/mazer/demo/assets/images/logo/logo.png" alt="" /></div>
            <ul className="menuC1">
                <li className="menuTitle">
                    Menu
                </li>
                <li className="itemMenu"> <ImDropbox/> <p>Product line</p></li>
                <li className="itemMenu"> <ImDropbox/> <p>Products</p></li>
                <li className="itemMenu"> <ImDropbox/> <p>Panel variant</p></li>
                <li className="itemMenu"> <ImDropbox/> <p>Panel Color</p></li>
                <li className="itemMenu"> <ImDropbox/> <p>Product</p></li>
            </ul>
       </div>
    )
}
