import { RECEIVE_WEATHER } from '../actions'
const initialState = []
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_WEATHER:
      return payload
    default:
      return state
  }
}

export default reducer
