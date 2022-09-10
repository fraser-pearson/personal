import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFish } from '../actions'

function App() {
  const fish = useSelector((state) => state.fish)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFish())
  }, [])

  return (
    <>
      <div className="app">
        <h1>list of fish</h1>
        <ul>
          {fish.map((aFish, i) => (
            <li key={i}>{aFish.species}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
