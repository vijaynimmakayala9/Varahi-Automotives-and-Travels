import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyAndPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import ShippingPolicy from './pages/ShippingPolicy'
import CancellationAndRefundPolicy from './pages/CancellationAndRefund'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/privacy-and-policy" element={<PrivacyPolicy/>}/>
      <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
      <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
      <Route path="/cancellation-refund-policy" element={<CancellationAndRefundPolicy/>}/>
    </Routes>
    </>
  )
}

export default App
