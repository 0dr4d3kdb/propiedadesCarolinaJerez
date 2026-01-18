import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './components/pages/Principal/Principal'
import AboutUs from './components/pages/aboutUs/AboutUs'
import Header from './components/organisms/header/Header'
import Footer from './components/organisms/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header/>

        <main className="content">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App
