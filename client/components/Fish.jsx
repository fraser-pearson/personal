import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleFish from './SingleFish'
import { fetchFish, deleteAFish } from '../actions'
import { Link } from 'react-router-dom'
import AddFish from './AddFish'

function Fish() {
  const fish = useSelector((state) => state.fish)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(deleteAFish(e.target.id))
  }

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
              <button id={aFish.id}>
                <Link to={`/${aFish.id}`}>Edit</Link>
              </button>
              <button id={aFish.id} onClick={handleSubmit}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <AddFish />
    </>
  )
}

export default Fish
