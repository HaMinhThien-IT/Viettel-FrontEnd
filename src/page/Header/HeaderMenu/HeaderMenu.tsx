import React from 'react'
import './HeaderMenu.css'
import { BsChevronDown } from 'react-icons/bs';
import { FaMobile ,FaPiggyBank} from 'react-icons/fa';
import { AiFillFire,AiOutlineMenu } from 'react-icons/ai';
export default function HeaderMenu() {
    return (
        <div className='containerHeaderMenu'>
            <div className="container">
                <ul className="headerMenuItem">
                    <li className="itemMenuHeader">Danh mục sản phẩm <BsChevronDown/></li>
                    <li className="itemMenuHeader">Tìm theo hàng <BsChevronDown/></li>
                    <li className="itemMenuHeader">Sim số - Dịch vụ <BsChevronDown/></li>
                    <li className="itemMenuHeader"><FaMobile/>Mua máy kèm gói cước</li>
                    <li className="itemMenuHeader"><FaPiggyBank/>Trả góp 0%</li>
                    <li className="itemMenuHeader"><AiFillFire/>Độc quyền online</li>
                    <li className="itemMenuHeader"><AiOutlineMenu/>Tin tức</li>
                </ul>
            </div>
        </div>
    )
}
