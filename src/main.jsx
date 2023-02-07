import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'
import { Navbar } from './components/Navbar'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)