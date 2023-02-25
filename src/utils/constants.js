/* AUTH */
const AUTH_ROLES = [
    'user',
    'admin',
    'banned'
]

const AUTH_PROVIDERS = [
    'local'
]

const MAX_RETRY_TIMES = 3
const RETRY_DELAY = 500

export {
    AUTH_ROLES,
    AUTH_PROVIDERS,
    MAX_RETRY_TIMES,
    RETRY_DELAY
}