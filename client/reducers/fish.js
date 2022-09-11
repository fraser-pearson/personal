import { SET_FISH, ADD_FISH } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FISH:
      return payload
    case ADD_FISH:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
