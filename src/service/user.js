import axios from "axios"
import { INIT_AUTH_STATE } from "../context/AuthContext"

const SOURCE_SERVER_BASE_URL = import.meta.env.VITE_SOURCE_SERVER_BASE_URL

const user = axios.create({
    withCredentials: true,
    credentials: 'include',
    baseURL: SOURCE_SERVER_BASE_URL
})

/** NOTE: Register
 * @param {
 *  username,
 *  password,
 *  role,
 *  provider
 * } payload
 * @returns {username, role, provider}
 * @summary: Register New User
 */
const registerUser = async (payload) => {
    try{
        const res = await user.post('/user/register', payload)
        return res.data
    } catch (e) {
        return e?.response?.data
    }
}

/** NOTE: Check Auth & Get User Info
 * @param {
 *  accessToken
 * } payload
 * @returns { message, userInfo, accessToken }
 * @summary: Check Auth and Get user Info
 */
const checkAuthUser = async (payload) => {
    try {
        const { accessToken } = payload
        const res = await user.post(
            '/user/user_auth', {},
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        )

        return res.data
    } catch (e) {
        if (e.response.status === 403) {
            return e.response.data
        }
        return e.response.data
    }
}

/** NOTE: Login User
 * @param {
 *  username,
 *  password,
 *  role,
 *  provider
 * } payload
 * @returns { message, userInfo, accessToken }
 * @summary: Login User to get Auth Tokens
 */
const loginUser = async (payload) => {
    try{
        const res = await user.post('/user/login', payload)
        return res.data
    } catch (e) {
        return e.response.data
    }
}

/** NOTE: Logout User
 * @returns { message }
 * @summary: Logout User and clean refresh token in backend cookies
 * @remark Need to handle initalize auth context after calling this function
 */
const logoutUser = async () => {
    try{
        const res = await user.post('/user/logout')
        return res
    } catch (e) {
        return e.response
    }
}

export {
    registerUser,
    checkAuthUser,
    loginUser,
    logoutUser
}