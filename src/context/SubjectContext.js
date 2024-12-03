import { createContext, useContext, useState } from "react"
import { getSubjects } from "../apis/student";
import { CommonsContext } from "./CommonContext";

export const SubjectsContext = createContext();

export const SubjectContext = ({children}) => {
    const {setLoading} = useContext(CommonsContext);
    const [subjects, setSubjects] = useState([]);
    
    const subjectList = async () => {
        setLoading(true);
        let data = await getSubjects();
        if(data?.status === 200){
            setLoading(false);
            setSubjects(data?.data?.data);
        }else{
            setLoading(true);
        }
    };

    return(
        <SubjectsContext.Provider value={{subjects, setSubjects, subjectList}}>
            {children}
        </SubjectsContext.Provider>
    )
}