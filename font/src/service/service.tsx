import { request } from "umi";

export async function registerUser(data) {
    return request('/api/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        params: {
            username:data.username,
            password:data.password,
            phone:data.phone
        }
    })
}