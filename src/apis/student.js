import { callApi } from "."

export const getStudents = async () => {
    let data = await callApi({url:'student/list', body:undefined, method: 'GET'});
    return data;
}

export const getSubjects = async () => {
    let data = await callApi({url: 'student/subject/list', body: undefined, method: 'GET'});
    return data;
}