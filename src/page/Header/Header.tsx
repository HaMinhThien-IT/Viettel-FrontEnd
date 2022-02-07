import React, { useContext } from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { Link } from 'react-router-dom';
import { userContext } from '../../store/UserContext';
export default function Header() {
    const {name} = useContext(userContext)
    console.log();
    
    return (
        <>
        <div className='containerHeader'>
           <div className="container">
               <div className="containerTop">
                    <div className="logo">
                        <img src="https://imgs.viettelstore.vn/images/ctkm/theme-tet-2021/logo-tet-2022.png" alt="" />
                    </div>
                    <div className="inputSearch">
                        <input type="text" placeholder='Bạn cần tìm sản phẩm nào ... '/>
                        <AiOutlineSearch/>
                    </div>
                    <div className="location">
                     {
                         name === undefined ?  <Link to='/login'>
                         <MdOutlineAccountCircle/>
                           <span className='login'>Đăng nhập</span> 
                           <span>/ Đăng kí</span>
                           </Link> :  <Link to='/login'>
                      <MdOutlineAccountCircle/>
                      <span className='login'>Xin chào : </span> 
                        <span>{name}</span>
                        </Link>
                     }
                    </div>
                    <div className="cartHeader">
                        <div className="iconCart">
                            <BsCart3/>
                        </div>
                      
                       <p>Giỏ hàng<span>(0)</span></p>
                    </div>
               </div>
           </div>
        </div>
        <HeaderMenu/>
        </>
    )
}
