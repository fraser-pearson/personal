import request from 'superagent'
import { getFish, getWeather } from '../apis/apiClient'

export const SET_FISH = 'SET_FISH'
// export const SET_WEATHER = 'SET_WEATHER'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function setfish(fish) {
  return {
    type: SET_FISH,
    payload: fish,
  }
}

// export function setweather(weather) {
//   return {
//     type: SET_WEATHER,
//     payload: weather,
//   }
// }

export function fetchFish() {
  return (dispatch) => {
    return getFish().then((fish) => {
      dispatch(setfish(fish))
    })
  }
}

// export function fetchWeather() {
//   return (dispatch) => {
//     return getWeather()
//       .then((weather) => {
//         dispatch(setweather(weather))
//         return null
//       })
//       .catch((err) => {
//         console.error(err, 'error not item')
//       })
//   }
// }

export function requestWeather() {
  return {
    type: REQUEST_WEATHER,
  }
}

export function receiveWeather(weather) {
  return {
    type: RECEIVE_WEATHER,
    payload: weather,
  }
}

export function fetchWeather() {
  return (dispatch) => {
    dispatch(requestWeather())
    return request
      .get(`/api/v1/weather`)
      .then((res) => {
        dispatch(receiveWeather(res.body))
      })
      .catch((err) => {
        console.error(err, 'error not weather')
      })
  }
}
