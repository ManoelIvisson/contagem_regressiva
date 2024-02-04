import { createContext, useState } from "react"

export const ContagemContext = createContext()

export const ContagemProvider = ({children}) => {
    const [evento, setEvento] = useState()

    return (
        <ContagemContext.Provider value={{evento, setEvento}}>
            {children}
        </ContagemContext.Provider>
    )
}