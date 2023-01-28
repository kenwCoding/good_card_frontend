import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DevTest, Error, Home, Login, NotFound, Register } from './pages'
import { RootLayout } from './layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* NOTE: Public Route */}
          {/* <Route element={<AuthConditionalRoute authRoles={[ROLES.UNAUTH, ROLES.BLACK_LISTED]} redirectTo="/" />}> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          {/* </Route> */}

          {/* NOTE: Admin Route */}
          {/* <Route element={<AuthConditionalRoute authRoles={[ROLES.ADMIN]} redirectTo="/" />}> */}
            <Route path="/admin" element={<Home role='admin' />} />
          {/* </Route> */}

          {/* NOTE: Authed General Route */}
          {/* <Route element={<AuthConditionalRoute authRoles={[ROLES.ADMIN, ROLES.USER]} redirectTo="/login" />}> */}
            <Route path="/" element={<Home role='general' />} />
          {/* </Route> */}

          {/* NOTE: Error Page */}
          <Route path="/error" element={<Error />} />

          {/* NOTE: For Dev test use */}
          <Route path="/dev" element={<DevTest />} />

          {/* NOTE: catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
