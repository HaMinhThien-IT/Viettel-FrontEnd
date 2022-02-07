import { createContext, ReactNode, useEffect, useState } from "react";
import { authController } from "../controller/AuthController";

interface nameContextDefault {
    name: string,
    user_id:string
    onSetUserName: () => void,
}

const nameDefault: nameContextDefault = {
    name: 'null',
    user_id:'',
    onSetUserName: () => { },
}

interface userContextProvider {
    children: ReactNode
}


export const userContext = createContext<nameContextDefault>(nameDefault)

export default function UserContext({ children }: userContextProvider) {
    const [name, setName] = useState("")
    const [user_id, setUser_id] = useState("")
    const onSetUserName = () => {
        authController.getMe().then(res => {
            
            setUser_id(res.user_id)
            setName(res.name_user);
        })
    }
   ;
    useEffect(() => {
        authController.getMe().then(res => {
           if(res.user_id!=undefined){
                setUser_id(res.user_id)
            setName(res.name_user);
           }
           
        })
    }, [])
    const data = { name,user_id, onSetUserName }
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}
