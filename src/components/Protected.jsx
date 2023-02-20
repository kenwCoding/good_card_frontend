import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

/** NOTE: 
 * @param {Component} element
 * - wrapped page component
 * @param {string} rediretTo
 * - auto redirect path for unmatch condition use
 * @param {Array<string>} roles
 * - the valid roles for access
 * @summary Conditional Routing and will do auth check every time page changed
 */

function Protected(props) {
    const {element = <></>, rediretTo = '/login', roles = [""], ...otherPorps} = props

    const { auth, isLoadingAuth } = useAuth()

    const validRoles = new Set(roles)

    return (isLoadingAuth
        ? <>Loading</>
        : validRoles.has(auth?.role)
            ? element
            : <Navigate to={rediretTo} replace={true}/>
    )
}

export { Protected }