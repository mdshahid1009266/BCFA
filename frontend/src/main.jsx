import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { AdminContextProvider } from "./context/adminContext.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AdminContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminContextProvider>
  // </StrictMode>,
)
