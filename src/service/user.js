import axios from "axios"

const SOURCE_SERVER_BASE_URL = import.meta.env.VITE_SOURCE_SERVER_BASE_URL

/* Register */
const registerUser = async (payload) => {
    console.log(`${SOURCE_SERVER_BASE_URL}/user`);
    const res = await axios.post(`${SOURCE_SERVER_BASE_URL}/user`, payload)
    return res.data
}

export {
    registerUser
}