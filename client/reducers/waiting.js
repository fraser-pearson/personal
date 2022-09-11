import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_WEATHER:
      return true
    case RECEIVE_WEATHER:
      return false
    default:
      return state
  }
}

export default waiting
