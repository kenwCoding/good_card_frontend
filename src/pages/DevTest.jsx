import React from 'react'
import { useAuth } from '../hooks'
import { CenterLayout } from '../layout'
import { checkAuthUser, loginUser, logoutUser, registerUser } from '../service'

function DevTest() {
    const { setAuth, auth } = useAuth()
    return (
        <CenterLayout>
            <button
                onClick={ async() => {
                    const { message } = await registerUser({
                        username: 'abcde123',
                        password: 'abcde123',
                        role: 'user',
                        provider: 'local'
                    })
                    console.log(message);
                }}
            >
                register
            </button>
            <button
                onClick={ async() => {
                    const { message } = await loginUser({
                        username: 'abcde123',
                        password: 'abcde123',
                        role: 'user',
                        provider: 'local'
                    })
                    console.log(message);
                }}
            >
                login
            </button>
            <button
                onClick={ async() => checkAuthUser({
                    username: 'abcde123',
                    password: 'abcde123',
                    role: 'user',
                    provider: 'local',
                })
            }
            >
                test auth
            </button>
            <button
                onClick={ async() => logoutUser()}
            >
                Logout
            </button>
        </CenterLayout>
    )
}

export { DevTest }