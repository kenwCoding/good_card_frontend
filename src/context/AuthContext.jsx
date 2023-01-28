import React, { createContext, useState } from 'react'

const INIT_AUTH_STATE = {
    userId: '',
    username: '',
    role: '',
    provider: '',
    authToken: '',
}

const AuthContext = createContext()

function AuthProvider(props) {
    const [auth, setAuth] = useState(INIT_AUTH_STATE);

    const initAuth = () => {
        setAuth({...INIT_AUTH_STATE})
    }

    return (
        <AuthContext.Provider value = {{
            auth,
            setAuth,
            initAuth
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }