import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Weather() {
  const weather = useSelector((state) => state.weather)
  console.log(weather.daily)
  return (
    <>
      <div className="box">
        <h2 className="title is-4">
          <b>{}</b>
        </h2>
      </div>
    </>
  )
}
export default Weather
