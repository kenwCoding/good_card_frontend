// import React from 'react'
// import { useMutation, useQueries } from 'react-query'
// import { useAuth } from '.'
// import { MAX_RETRY_TIMES, RETRY_DELAY } from '../utils/constants'

// const useAuthMutation = (queryKey, api, opt = {}) => {
//     const { setAuth } = useAuth()
//     const defaultOption = {
//         retry: async(count, error) => {
//             console.log(count);
//             console.log(error);
//             if (count >= MAX_RETRY_TIMES) {
//                 console.log(count >= MAX_RETRY_TIMES);
//                 return Promise.reject(error)
//             } else {
//                 const result = await refreshAccessToken()
//                 if (result?.accessToken) {
//                     setAuth(result.accessToken)
//                 } else {
//                     console.log(result.message);
//                 }
//                 return false
//             }
//         },
//         retryDelay: RETRY_DELAY,
//         ...opt
//     }

//     return (
//         useMutation(queryKey, api, defaultOption)
//     )
// }

// const useAuthQuery = (queryKey, api, opt = defaultOption) => {
//     const { setAuth } = useAuth()
//     const defaultOption = {
//         retry: async(count, error) => {
//             console.log(count);
//             console.log(error);
//             if (count >= MAX_RETRY_TIMES) {
//                 return false
//             } else {
//                 const result = await refreshAccessToken()
//                 if (result?.accessToken) {
//                     setAuth(result.accessToken)
//                 } else {
//                     console.log(result.message);
//                 }
//                 return false
//             }
//         },
//         retryDelay: RETRY_DELAY,
//         ...opt
//     }

//     return (
//         useQuery(queryKey, api, defaultOption)
//     )
// }

// /** 
//     type queries = Array<queryObject>
//     type queryObject = {
//         queryKey: string | unknown[]
//         queryFn: api
//         opt: queryOptionObject
//     }
// */
// const useAuthQueries = (queries) => {
//     const { setAuth } = useAuth()
//     const defaultOption = {
//         retry: async(count, error) => {
//             if (count >= MAX_RETRY_TIMES) {
//                 return false
//             } else {
//                 const result = await refreshAccessToken()
//                 if (result?.accessToken) {
//                     setAuth(result.accessToken)
//                 } else {
//                     console.log(result.message);
//                 }
//                 return false
//             }
//         },
//         retryDelay: RETRY_DELAY
//     }

//     return (
//         useQueries(queries.map((query) => {
//             if (Object.keys(query) == 2) {
//                 return {...query, defaultOption}
//             }
//         }))
//     )
// }
// export { 
//     useAuthMutation,
//     useAuthQuery,
//     useAuthQueries
// }