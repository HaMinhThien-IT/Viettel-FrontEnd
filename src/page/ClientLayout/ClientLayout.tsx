import React, { ReactNode } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../Header/Header'
type props = {
    children: ReactNode
}
export default function ClientLayout(props: props) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
