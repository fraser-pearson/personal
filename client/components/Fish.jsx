import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleFish from './SingleFish'
import { UpdateFish } from './UpdateFish'
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
          {fish.map((aFish) => (
            <li key={aFish.id}>
              <SingleFish species={aFish.species} />
              <UpdateFish id={aFish.id} />
              {/* <deleteFish id={aFish.id} /> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Fish
