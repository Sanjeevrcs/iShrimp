// import { useState } from 'react'

import './App.css'
import Dashboard from './routes/Dashboard'
import Bots from './routes/Bots'
import Trips from './routes/Trips'
import { Routes, Route } from "react-router-dom"
function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="trips" element={ <Trips/> } />
        <Route path="bots" element={ <Bots/> } />
      </Routes>
    </>
  )
}

export default App
