import axios from "axios"

const SOURCE_SERVER_BASE_URL = import.meta.env.VITE_SOURCE_SERVER_BASE_URL

const user = axios.create({
    withCredentials: true,
    credentials: 'include',
    baseURL: SOURCE_SERVER_BASE_URL
})

/* Register */
const registerUser = async (payload) => {
    const res = await user.post('/user', payload)
    console.log(res.data.message);
    return res.data
}

const checkAuthUser = async (payload) => {
    const res = await user.post('/user/sample', payload)
    if (res.status === 403) {
        console.log('Please login again');
        return res.data
    }
    return res.data
}

const loginUser = async (payload) => {
    const res = await user.post('/user/login', payload)
    return res.data
}

const logoutUser = async () => {
    const res = await user.post('/user/logout')
    return res.data
}

export {
    registerUser,
    checkAuthUser,
    loginUser,
    logoutUser
}