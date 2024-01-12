import React from 'react'
import Admin from './Pages/Admin'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Resorts from './Pages/Resorts'
import Bookings from './Pages/Bookings'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Admin/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/resorts' element={<Resorts/>}/>
          <Route path='/bookings'element={<Bookings/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App;