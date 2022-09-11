import { getFish, getWeather } from '../apis/apiClient'

export const SET_FISH = 'SET_FISH'
export const SET_WEATHER = 'SET_WEATHER'

export function setfish(fish) {
  return {
    type: SET_FISH,
    payload: fish,
  }
}

export function setweather(weather) {
  return {
    type: SET_WEATHER,
    payload: weather,
  }
}

export function fetchFish() {
  return (dispatch) => {
    return getFish().then((fish) => {
      dispatch(setfish(fish))
    })
  }
}

export function fetchWeather() {
  return (dispatch) => {
    return getWeather()
      .then((weather) => {
        dispatch(setweather(weather))
        return null
      })
      .catch((err) => {
        console.error(err, 'error not item')
      })
  }
}
