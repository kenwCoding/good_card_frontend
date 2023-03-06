import React, { useState } from 'react'
import { useAuth } from '../hooks'
import { CenterLayout } from '../layout'
import { checkAuthUser, loginUser, logoutUser, registerUser } from '../service'

/* NOTE: 
For Dev Use,
Can modify with anything in anytime

Path: '/dev'
*/
function DevTest() {
    const { setAuth, auth } = useAuth()
    console.log(auth)
    const { message } = useState('')
    return (
        <>
            <button
                onClick={async () => {
                    const { message, userInfo } = await registerUser({
                        username: 'abcde123',
                        password: 'abcde123',
                        role: 'user',
                        provider: 'local'
                    })
                    const { username, role, provider } = userInfo
                    console.log('Msg.:', message);
                    console.log(`${role}: ${username} register successfully from ${provider}`);
                }}
            >
                register
            </button>
            <button
                onClick={async () => {
                    const { message, userInfo, accessToken } = await loginUser({
                        username: 'abcde123',
                        password: 'abcde123',
                        role: 'user',
                        provider: 'local'
                    })
                    userInfo['accessToken'] = accessToken
                    setAuth(userInfo)
                    console.log(message);
                }}
            >
                login
            </button>
            <button
                onClick={async () => {
                    const { message, userInfo, accessToken } = await checkAuthUser({
                        accessToken: auth.accessToken
                    })

                    console.log(message);

                    setAuth({
                        ...userInfo,
                        accessToken
                    })
                }
                }
            >
                test auth
            </button>
            <button
                onClick={async () => {
                    await logoutUser()
                }}
            >
                Logout
            </button>
            <>{message}</>
        </>
    )
}

export { DevTest }