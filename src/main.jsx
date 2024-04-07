import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProviders from './providers/AuthProviders.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
