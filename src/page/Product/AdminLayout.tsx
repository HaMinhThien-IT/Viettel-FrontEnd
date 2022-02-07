import React, { ReactNode } from 'react'
import Menu from '../Admin/Menu/Menu'
import './AdminLayout.css'
type props ={
    children : ReactNode
}
export default function AdminLayout(props:props) {
    return (
        <div className='adminLayout'>
        <Menu/>
         {props.children}   
        </div>
    )
}
