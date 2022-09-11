import React from 'react'
import Weather from './Weather'
import Fish from './Fish'
import Wait from './Wait'
import LoadWeather from './LoadWeather'

function App() {
  return (
    <>
      <Fish />
      <LoadWeather>
        <Wait />
      </LoadWeather>
      <Weather />
    </>
  )
}

export default App
