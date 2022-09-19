import { SET_FISH, ADD_FISH, UPDATE_FISH } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FISH:
      return payload
    case ADD_FISH:
      return [...state, payload]
    case UPDATE_FISH:
      // eslint-disable-next-line no-case-declarations
      const { newFish, oldFish } = action.payload
      return state.map((fish) => (fish === oldFish ? newFish : fish))
    default:
      return state
  }
}

export default reducer
