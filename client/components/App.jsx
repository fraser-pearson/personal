import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Fish from './Fish'
import { UpdateFish } from './UpdateFish'
//import Weather from './Weather'
//import Wait from './Wait'
//import LoadWeather from './LoadWeather'
function App() {
  return (
    <>
      <header className="header">
        <h1>Fish</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Fish />} />
          <Route path="/:id" element={<UpdateFish />} />
        </Routes>
      </Router>
      {/* <LoadWeather>
        <Wait />
      </LoadWeather>
      <Weather /> */}
    </>
  )
}

export default App
