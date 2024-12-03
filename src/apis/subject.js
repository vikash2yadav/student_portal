import { callApi } from "."

export const addSubject = async (body) => {
    let data = await callApi({url:'subject/add', body, method: 'POST'});
    return data;
}

export const updateSubject = async (body) => {
    let data = await callApi({url:'subject/update', body, method: 'PUT'});
    return data;
}

export const subjectStatusUpdate = async (body) => {
    let data = await callApi({url:'subject/status', body, method: 'PUT'});
    return data;
}

export const deleteSubject = async (id) => {
    let data = await callApi({url:`subject/delete/${id}`, body:undefined, method: 'DELETE'});
    return data;
}

export const getSubject = async (id) => {
    let data = await callApi({url:`subject/get/${id}`, body:undefined, method: 'GET'});
    return data;
}

export const getSubjects = async () => {
    let data = await callApi({url: 'subject/list', body: undefined, method: 'GET'});
    return data;
}