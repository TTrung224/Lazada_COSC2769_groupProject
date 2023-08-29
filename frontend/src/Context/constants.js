import axios from 'axios';

export const backendUrl = 'http://localhost:2222'

export const axiosSetting = axios.create({
    baseURL: `${backendUrl}/`,
    withCredentials: true
})