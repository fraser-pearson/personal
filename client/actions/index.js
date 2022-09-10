import { getFish } from '../apis/fish'

export const SET_FISH = 'SET_FISH'

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
