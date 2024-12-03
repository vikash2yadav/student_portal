import { createContext, useContext, useState } from "react"
import { getStudents } from "../apis/student";
import { CommonsContext } from "./CommonContext";

export const StudentsContext = createContext();

export const StudentContext = ({children}) => {
    const {setLoading} = useContext(CommonsContext);
    const [students, setStudents] = useState([]);
    
    const studentList = async () => {
        setLoading(true);
        let data = await getStudents();
        if(data?.status === 200){
            setLoading(false);
            setStudents(data?.data?.data);
        }else{
            setLoading(true);
        }
    };

    return(
        <StudentsContext.Provider value={{students, setStudents, studentList}}>
            {children}
        </StudentsContext.Provider>
    )
}