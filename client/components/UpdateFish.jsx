import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { updateFish } from '../actions'

export function UpdateFish({ id }) {
  const fish = useSelector((state) => state.fish)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(id)
    //dispatch(updateFish(id))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Update" />
      </form>
    </>
  )
}

export default UpdateFish
