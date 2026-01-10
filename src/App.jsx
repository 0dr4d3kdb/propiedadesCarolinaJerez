import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './pages/Principal/Principal'
import AboutUs from './pages/aboutUs/AboutUs'

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
