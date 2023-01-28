import React from 'react'
import { CenterLayout } from '../layout'
import { registerUser } from '../service'

function DevTest() {
    
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
        </CenterLayout>
    )
}

export { DevTest }