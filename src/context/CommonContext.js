import { createContext, useState } from "react"
import Snackbarr from "../components/Snackbarr";

export const CommonsContext = createContext();

export const CommonContext = ({children}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [successMessage, setSuccessMessage] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editData, setEditData] = useState({});

    return(
        <CommonsContext.Provider value={{open, setOpen, message, successMessage, setSuccessMessage, setMessage, isEdit, setIsEdit, loading, setLoading, editData, setEditData}}>
            {children}
            <Snackbarr />
        </CommonsContext.Provider>
    )
}