import React from 'react'
import { useAuth } from '../hooks'
import { CenterLayout } from '../layout'
import { checkAuthUser, loginUser, registerUser } from '../service'

function DevTest() {
    const { setAuth, auth } = useAuth()
    return (
        <CenterLayout>
            <button
                onClick={ async() => {
                    await registerUser({
                        username: 'abcde123',
                        password: 'abcde123',
                        role: 'user',
                        provider: 'local'
                    })
                }}
            >
                register
            </button>
            <button
                onClick={ async() => {
                    const { accessToken } = await loginUser({
                        username: 'abcde123',
                        password: 'abcde123',
                        role: 'user',
                        provider: 'local'
                    })

                    if (accessToken) {
                        setAuth({
                            username: 'abcde123',
                            password: 'abcde123',
                            role: 'user',
                            provider: 'local',
                            accessToken: accessToken
                        })
                    }
                }}
            >
                login
            </button>
            <button
                onClick={ async() => {
                    const res = await checkAuthUser({
                        username: 'abcde123',
                        password: 'abcde123',
                        role: 'user',
                        provider: 'local',
                        accessToken: auth.accessToken
                    })
                    // const result = await res.json()
                    console.log('Auth Result: ', res.message);
                }}
            >
                test auth
            </button>
        </CenterLayout>
    )
}

export { DevTest }