import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page from './components/login/page.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from "./components/dashboard/dashboard.jsx"
import Registro from './components/registro/registro.jsx'
import RecuperarPassword from './components/recuperarPassword/recuperarPassword.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Page" element={<Page />} />
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Registro' element={<Registro></Registro>}></Route>
        <Route path='/RecuperarPassword' element={<RecuperarPassword></RecuperarPassword>}></Route>
        </Routes>
    </BrowserRouter>
  
  </StrictMode>
)
