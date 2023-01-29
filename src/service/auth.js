import axios from "axios"

const AUTH_SERVER_BASE_URL = import.meta.env.VITE_AUTH_SERVER_BASE_URL

const auth = axios.create({
    withCredentials: true,
    credentials: 'include',
    baseURL: AUTH_SERVER_BASE_URL
})

const loginUser = async (payload) => {
    const res = await auth.post('/auth/login', payload)
    return res.data
}

export {
    loginUser
}