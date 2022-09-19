import React from 'react'
import { useDispatch } from 'react-redux'
import { updateFish } from '../actions'
import { Link } from 'react-router-dom'

export function UpdateFish({ id }) {
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(id)
    dispatch(updateFish(id))
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
