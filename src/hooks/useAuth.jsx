import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, INIT_AUTH_STATE } from '../context/AuthContext'
import { checkAuthUser, logoutUser } from '../service'

/* NOTE: 
    For each pages use
*/

function useAuth() {
    const {auth, setAuth, initAuth} = useContext(AuthContext)

    const [isLoadingAuth, setIsLoadingAuth] = useState(true)

    // Check Auth When page changed
    useEffect(() => {
        const getAuth = async () => {
            setIsLoadingAuth(true)
            const { userInfo, accessToken } = await checkAuthUser({
                accessToken: auth.accessToken
            })
            if (accessToken) {
                userInfo['accessToken'] = accessToken 
                setAuth(userInfo)
            } else {
                const res = await logoutUser()
                if (res.status !== 200) {
                    console.log("Initialized Auth Failed");
                }
                if (res.status === 200) {
                    setAuth(INIT_AUTH_STATE)
                    console.log("Initialized Auth");
                }
            }
            setIsLoadingAuth(false)
        }

        getAuth()
    }, [])

    return {
        isLoadingAuth,
        auth,
        setAuth,
        initAuth
    }
}

export { useAuth }