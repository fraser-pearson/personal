import { combineReducers } from 'redux'

import fish from './fish'
import weather from './weather'
import waiting from './waiting'

export default combineReducers({
  fish,
  weather,
  waiting,
})
