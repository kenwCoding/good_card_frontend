# Repos
- Frontend Web App
https://github.com/kenwCoding/good_card_frontend

- Source Backend Server
https://github.com/kenwCoding/good_card_backend

- Auth Backend Server
https://github.com/kenwCoding/good_card_auth

- SMTP Email Server
https://github.com/kenwCoding/good_card_smtp

# Other Ports
- Source Server: localhost:3001
    - base CRUD
    - auth cookies storage
- Auth Server: localhost:3002
    - create Access token
    - create Refresh token
    - auth token validation
    - get user info by Access Token 

# Auth Check frontend
1. Protected Component
- Allow specific user role to access
- Auto check auth by useAtuhHook when user switch route

2. Auth Context
- Store auth info in Global Scope

3. useAuth Hook
- Store auth info in Component Scope

# Dev
1. Dev Page
- path: '/dev'
- for doing any dev testing

2. dev folder
- for personal storage use
- e.g. UI template, temp code

# Env
VITE_AUTH_SERVER_BASE_URL="http://localhost:3002"
VITE_SOURCE_SERVER_BASE_URL="http://localhost:3001"