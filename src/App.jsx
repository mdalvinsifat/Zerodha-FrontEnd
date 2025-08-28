import { useState } from 'react'

import './App.css'
import HomePage from './Landing Page/Home/HomePage'
import Navber from './Landing Page/Navber'
import Footer from './Landing Page/Footer'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Landing Page/About/AboutPage'
import Pricing from './Landing Page/Home/Pricing'
import ProductPage from './Landing Page/Products/ProductPage'
import SupportPage from './Landing Page/Support/SupportPage'
import Sign from './Landing Page/SignUp/Sign'
import PriceingPage from './Landing Page/Pricing/PriceingPage'
import NotFound from './Landing Page/NotFound'


function App() {

  return (
    <>

      <Navber />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/pricing' element={<PriceingPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/support ' element={<SupportPage/>}/>
        <Route path='/login' element={<Sign/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
