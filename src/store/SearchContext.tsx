import { createContext, ReactNode, useContext, useEffect, useState } from "react";
interface searchContextDefault {
    value: string,
    onSearch: (value: string) => void,
}

const searchDefault: searchContextDefault = {
    value: 'null',
    onSearch: () => { },
}

interface userContextProvider {
    children: ReactNode
}


export const searchContext = createContext<searchContextDefault>(searchDefault)

export default function SearchContext({ children }: userContextProvider) {
    const [value, setValue] = useState("")
    const onSearch = (value: string) => {
        setValue(value)
    }
    const data = { value, onSearch }
    return (
        <searchContext.Provider value={data}>
            {children}
        </searchContext.Provider>
    )
}
