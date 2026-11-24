import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'

const isPrivacyPage = /^\/privacy-policy\/?$/.test(window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPrivacyPage ? <PrivacyPolicy /> : <App />}
  </StrictMode>,
)
