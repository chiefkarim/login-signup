import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/poppins";
import App from './App.jsx'
import SignUpForm from '@/components/auth/sign-up-form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <SignUpForm/> 
  </StrictMode>,
)