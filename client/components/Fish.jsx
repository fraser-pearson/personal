import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFish } from '../actions'

function Fish() {
  const fish = useSelector((state) => state.fish)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFish())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Fish in this location</h1>
        <ul>
          {fish.map((aFish, i) => (
            <li key={i}>{aFish.species}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Fish
