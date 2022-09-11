import { combineReducers } from 'redux'

import fish from './fish'
import weather from './weather.js'

export default combineReducers({
  fish,
  weather,
})
