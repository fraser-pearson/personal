import { SET_FISH, ADD_FISH, UPDATE_FISH, DELETE_FISH } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FISH:
      return payload
    case ADD_FISH:
      return [...state, payload]
    case DELETE_FISH:
      return state.filter((fish) => fish.id !== Number(payload))
    case UPDATE_FISH:
      // eslint-disable-next-line no-case-declarations
      const { newFish, oldFish } = action.payload
      return state.map((fish) => (fish === oldFish ? newFish : fish))
    default:
      return state
  }
}

export default reducer
