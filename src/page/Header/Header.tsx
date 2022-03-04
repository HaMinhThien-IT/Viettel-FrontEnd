import React, { useContext, useState } from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { Link } from 'react-router-dom';
import { userContext } from '../../store/UserContext';
import { cartContext } from '../../store/CartContext';
import { searchContext } from '../../store/SearchContext';

export default function Header() {
    const { name } = useContext(userContext)
    const { listCart } = useContext(cartContext)
    const { onSearch } = useContext(searchContext)
    const [value, setValue] = useState("")

    return (
        <>
            <div className='containerHeader'>
                <div className="container">
                    <div className="containerTop">
                        <Link to='/dien-thoai' className="logo">
                            <img src="https://imgs.viettelstore.vn/images/ctkm/theme-tet-2021/logo-tet-2022.png" alt="" />
                        </Link>
                        <div className="inputSearch">
                            <input type="text" onChange={(e) => setValue(e.target.value)} placeholder='Bạn cần tìm sản phẩm nào ... ' />
                            <AiOutlineSearch onClick={() => onSearch(value)} />
                        </div>
                        <div className="location">
                            {
                                name === undefined ? <Link to='/login'>
                                    <MdOutlineAccountCircle />
                                    <span className='login'>Đăng nhập</span>
                                    <span>/ Đăng kí</span>
                                </Link> : <Link to='/login'>
                                    <MdOutlineAccountCircle />
                                    <span className='login'>Xin chào : </span>
                                    <span>{name || "null"}</span>
                                </Link>
                            }
                        </div>
                        <Link to='/cart' className="cartHeader">
                            <div className="iconCart">
                                <BsCart3 color='#fffff' />
                                <p>Giỏ hàng<span>({listCart.length})</span></p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <HeaderMenu />
        </>
    )
}
