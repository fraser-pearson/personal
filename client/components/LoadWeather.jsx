import React from 'react'
import { useDispatch } from 'react-redux'

import { fetchWeather } from '../actions'

function LoadWeather() {
  const dispatch = useDispatch()

  return (
    <div>
      <img src="images/nzMap.PNG" alt="map"></img>
      <label htmlFor="latitude">latitude: </label>
      <input type="text" id="latitude" name="latitude"></input>
      <label htmlFor="longitude">longitude: </label>
      <input type="text" id="longitude" name="longitude"></input>
      <button
        className="btn btn-success"
        onClick={() => dispatch(fetchWeather())}
      >
        Whats the weather
      </button>
    </div>
  )
}

export default LoadWeather
