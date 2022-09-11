import React from 'react'
import { useSelector } from 'react-redux'

function WaitIndicator() {
  const wait = useSelector((state) => state.waiting)

  return wait ? <h1>Please Wait</h1> : null
}

export default WaitIndicator
