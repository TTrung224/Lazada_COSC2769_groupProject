import axios from 'axios';

export const backendUrl = 'http://localhost:4500'

export const axiosSetting = axios.create({
    baseURL: `${backendUrl}/`,
    withCredentials: true
})