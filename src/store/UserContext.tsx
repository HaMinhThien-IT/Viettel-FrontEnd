import { createContext, ReactNode, useEffect, useState } from "react";
import { authController } from "../controller/AuthController";

interface nameContextDefault {
    name: string,
    user_id: string,
    onSetUserName: () => void,
    checkRole: boolean
}

const nameDefault: nameContextDefault = {
    name: 'null',
    user_id: '',
    onSetUserName: () => { },
    checkRole: false
}
interface userContextProvider {
    children: ReactNode
}
export const userContext = createContext<nameContextDefault>(nameDefault)
export default function UserContext({ children }: userContextProvider) {
    const [name, setName] = useState("")
    const [checkRole, setCheckRole] = useState<boolean>(false)
    const [user_id, setUser_id] = useState("")
    const onSetUserName = () => {
        authController.getMe().then(res => {
            if (res.role == 'admin') {
                setCheckRole(true)
            } else {
                setCheckRole(false)
            }
            setUser_id(res.user_id)
            setName(res.name_user);
        })
    }
    useEffect(() => {
        authController.getMe().then(res => {
            if (res.user_id != undefined) {
                console.log(res.role);
                if (res.role != 'admin') {
                    setCheckRole(true)
                } else {
                    setCheckRole(false)
                }
                setUser_id(res.user_id)
                setName(res.name_user);
            }
        })
    }, [])
    const data = { name, user_id, checkRole, onSetUserName }
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}
