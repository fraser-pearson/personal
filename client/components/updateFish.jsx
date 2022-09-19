import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateFish } from '../actions'
import { useParams } from 'react-router-dom'

export function AddFish() {
  const fishId = useParams().id
  const [newFish, setNewFish] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateFish(fishId, newFish))
  }
  return (
    <div className="addform">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={newFish}
            onChange={(e) => setNewFish(e.target.value)}
          />
          <button className="btn btn-primary">update</button>
        </form>
      </div>
    </div>
  )
}

export default AddFish
