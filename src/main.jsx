import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/components/Navbar.css'
import './styles/components/About.css'
import './styles/components/Experiences.css'
import './styles/components/Skills.css'
import './styles/components/Certificates.css'
import './styles/components/Footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 