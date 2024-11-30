import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/poppins";
import App from './App.jsx'
import SignUpForm from '@/components/auth/sign-up-form'
import SignUpForm2 from '@/components/auth/sign-up-form-2'
import SignInForm from '@/components/auth/sign-in'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUpForm />} />
                <Route path="/signup2" element={<SignUpForm2 />} />
                <Route path="/signin" element={<SignInForm />} />
            </Routes>
        </BrowserRouter>
  </StrictMode>,
)
