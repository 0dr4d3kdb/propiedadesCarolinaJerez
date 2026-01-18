import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './components/pages/Principal/Principal'
import AboutUs from './components/pages/aboutUs/AboutUs'
import Header from './components/organisms/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/sobre-nosotros' element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
