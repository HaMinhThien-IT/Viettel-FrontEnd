import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userContext } from '../../store/UserContext'
type props = {
    children: any
}
export default function AuthLayout(props: props) {
    const { checkRole } = useContext(userContext)
    console.log("checkRole", checkRole);

    if (checkRole) {
        return <Navigate to='/dien-thoai' />
    } else {
        return (
            <>{props.children}</>
        )
    }
}
