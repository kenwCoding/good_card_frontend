import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DevTest, Error, Home, Login, NotFound, Register, Cards, CardSets } from './pages'
import { RootLayout } from './layout'
import { Protected } from './components'

// NOTE - redirect to browser, game, listen, test, total, learned, starred based on query >>> <QUERY>/<FEATURE>
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/login" rediretTo={'/'} element={<Protected rediretTo='/' element={<Login />} />} />
          <Route path="/register" rediretTo={'/'} element={<Protected rediretTo='/' element={<Register />} />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/" element={<Protected roles={['user']} element={<Home />} />} />
          <Route path="/error" element={<Error />} />
          <Route path="/dev" element={<DevTest />} />
          <Route path="/cardsets" element={<CardSets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
