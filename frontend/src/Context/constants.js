import axios from 'axios';

export const backendUrl = 'http://localhost:4500'

export const axiosSetting = axios.create({
    baseURL: `${backendUrl}/`,
    withCredentials: true
})

export function numberFormat(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}