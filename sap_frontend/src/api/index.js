import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8088/'})

export const UserLogin = (authdata) => API.post('/user/login', authdata)
export const UserSignup = (authdata) => API.post('/user/register', authdata)
export const getAllUser = (authdata) => API.post('/user/', authdata)

export const StaffLogin = (authdata) => API.post('/staff/login', authdata)
export const StaffSignup = (authdata) => API.post('/staff/register', authdata)
export const getAllStaff = () => API.get('/staff/')
export const getStaff = (authdata) => API.get(`/staff/find/${authdata}`)

export const SapAll = () => API.get(`/sap/all/`)
export const SapGetAll = (id) => API.get(`/sap/all/${id}`)
export const SapAllFilter = (data) => API.post(`/sap/all/filter`, data)
export const SapAdd = (id, sapdata) => API.post(`/sap/add/${id}`, sapdata)
export const SapEdit = (id, sid, sapdata) => API.patch(`/sap/${id}/edit/${sid}`, sapdata)
export const SapDelete = (id, sid) => API.patch(`/sap/${id}/delete/${sid}`)

export const Eventsall = () => API.get('/event/')
export const Eventsadd = () => API.post('/event/add')
export const Eventsedit = (id) => API.patch(`/event/edit/${id}`)
export const Eventsdelete = (id) => API.delete(`/event/delete/${id}`)

export const Profile = (id) => API.get(`/profile/${id}`)
export const ProfileEdit = (id, data) => API.patch(`/profile/edit/${id}`, data)
