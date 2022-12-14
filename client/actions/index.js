import request from 'superagent'
import { getFish, addNewFish, deleteFishAPI } from '../apis/apiClient'

export const SET_FISH = 'SET_FISH'
// export const SET_WEATHER = 'SET_WEATHER'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
export const ADD_FISH = 'ADD_FISH'
export const UPDATE_FISH = 'UPDATE_FISH'
export const DELETE_FISH = 'DELETE_FISH'

export function setfish(fish) {
  return {
    type: SET_FISH,
    payload: fish,
  }
}

export function fetchFish() {
  return (dispatch) => {
    return getFish().then((fish) => {
      dispatch(setfish(fish))
    })
  }
}

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

export function addFish(fish) {
  return {
    type: 'ADD_FISH',
    payload: fish,
  }
}

export function addAFish(fish) {
  return (dispatch) => {
    return addNewFish(fish)
      .then((aFish) => {
        dispatch(addFish(aFish))
        return null
      })
      .catch((err) => {
        console.error(err, 'error not item')
      })
  }
}

export function deleteFish(id) {
  return {
    type: DELETE_FISH,
    payload: id,
  }
}

export function deleteAFish(id) {
  return (dispatch) => {
    return deleteFishAPI(id)
      .then(() => {
        dispatch(deleteFish(id))
      })
      .catch((err) => {
        console.error(err, 'error not item')
      })
  }
}

export const updateFish = (oldFish, newFish) => {
  return {
    type: UPDATE_FISH,
    payload: { oldFish, newFish },
  }
}

// export function updateAFish(id, fish) {
//   return (dispatch) => {
//     return updateFishAPI(id, fish)
//       .then((aFish) => {
//         dispatch(addFish(aFish))
//         return null
//       })
//       .catch((err) => {
//         console.error(err, 'error not item')
//       })
//   }
// }
