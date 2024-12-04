import { callApi } from "."

export const getStudents = async () => {
    let data = await callApi({url:'student/list', body:undefined, method: 'GET'});
    return data;
}

export const addStudent = async (body) => {
    let data = await callApi({url:'student/add', body, method: 'POST'});
    return data;
}

export const studentStatusUpdate = async (body) => {
    let data = await callApi({url:'student/status', body, method: 'PUT'});
    return data;
}

export const updateStudent = async (body) => {
    let data = await callApi({url:'student/update', body, method: 'PUT'});
    return data;
}

export const getStudentProfile = async (id) => {
    let data = await callApi({url:`student/get/${id}`, body:undefined, method: 'GET'});
    return data;
}

export const deleteStudent = async (id) => {
    let data = await callApi({url:`student/delete/${id}`, body:undefined, method: 'DELETE'});
    return data;
}

export const addStudentMark = async (body) => {
    let data = await callApi({url:'student/mark/add', body, method: 'POST'});
    return data;
}