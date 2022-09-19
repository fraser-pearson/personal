import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAFish } from '../actions'

export default function AddForm() {
  const [newFish, setNewFish] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addAFish(newFish))
    setNewFish('')
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
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  )
}
