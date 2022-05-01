import { request } from "umi";

export async function registerUser(data) {
    return request('/api/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            username: data.username,
            password: data.password,
            phone: data.phone
        }
    })
}

export async function Userlogin(data) {
    return request('/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            username: data.username,
            password: data.password,
        }
    })
}