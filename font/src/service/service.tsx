import { request } from "umi";

export async function registerUser(data) {
    return request('/api/user/register', {
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
    return request('/api/user/login', {
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

export async function getBlogList(data) {
    return request('/api/blog/filter', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            tag:data.tag,
            uid:data.uid,
            blogId:data.blogId
        }
    })
}