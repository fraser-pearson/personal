import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchWeather } from '../actions'

function LoadWeather() {
  const dispatch = useDispatch()

  return (
    <div>
      <label htmlFor="fname">latitude:</label>
      <input type="text" id="fname" name="fname"></input>
      <label htmlFor="lname">longitude:</label>
      <input type="text" id="lname" name="lname"></input>
      <button onClick={() => dispatch(fetchWeather())}>
        Whats the weather
      </button>
    </div>
  )
}

export default LoadWeather
