import { useState } from 'react'

import './App.css'
import HomePage from './Landing Page/Home/HomePage'
import Navber from './Landing Page/Navber'
import Footer from './Landing Page/Footer'
import { Route, Routes } from 'react-router-dom'
import Sign from "./Landing Page/SignUp/Sign"
import AboutPage from './Landing Page/About/AboutPage'
import ProductPage from './Landing Page/Products/ProductPage'
import PriceingPage from './Landing Page/Pricing/PriceingPage'
import NotFound from './Landing Page/NotFound'
import SupportPageZerodha from './Landing Page/Support/SupportPageZerodha'
import Summary from './Dashboard/Summary'
import Orders from './Dashboard/Orders'
import Holdings from './Dashboard/Holdings'
import Positions from './Dashboard/Positions'
import Funds from './Dashboard/Funds'
import Apps from './Dashboard/Apps'
import Home from './Dashboard/Home'
import TopBar from './Dashboard/TopBar'


function App() {

  return (
    <>



      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/pricing' element={<PriceingPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/supported' element={<SupportPageZerodha/>}/>
        <Route path='/pricing' element={<PriceingPage/>}/>
        <Route path='/login' element={<Sign/>}/>

  </Routes>
        {/* dashboard */}

    <Routes>

         <Route exact path="/*" element={<Home />} />
        
    </Routes>
    
     <Footer/>
    </>
  )
}

export default App
