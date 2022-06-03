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

export async function UserInfo(data) {
    return request('/api/user/filter', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            uid: data.uid
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
            tag: data.tag,
            uid: data.uid,
            blogId: data.blogId
        }
    })
}

export async function getartcle(data) {
    return request('/api/blog/filter', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            blogId: data.blogId
        }
    })
}

export async function getcomment(data) {
    return request('/api/comment/filter', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            blogId: data.blogId
        }
    })
}
export async function publishcomment(data) {
    return request('/api/comment/issue', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            content: data.content,
            uid: data.uid,
            blogId: data.blogId
        }
    })
}
export async function publish(data) {
    return request('/api/blog/issue', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            content: data.content,
            uid: data.uid,
            blogId: data.blogId,
            tag: data.tag,
            title: data.title
        }
    })
}
