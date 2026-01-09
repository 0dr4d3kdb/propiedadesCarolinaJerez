import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
