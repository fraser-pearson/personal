import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../actions'

function Weather() {
  const weather = useSelector((state) => state.weather)
  console.log(weather)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  return (
    <>
      <div className="box">
        <h2 className="title is-4">
          <b>{weather}</b>
        </h2>
      </div>
    </>
  )
}
export default Weather
