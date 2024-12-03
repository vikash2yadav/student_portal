import { createContext, useState } from "react"

export const CommonsContext = createContext();

export const CommonContext = ({children}) => {
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    
    return(
        <CommonsContext.Provider value={{open, setOpen,isEdit, setIsEdit, loading, setLoading}}>
            {children}
        </CommonsContext.Provider>
    )
}