import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="add-product" element={<AddProduct/>}/>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  )
}

export default App
