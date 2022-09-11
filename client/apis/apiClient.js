import request from 'superagent'

const rootUrl = 'http://localhost:3000/api/v1'

export function getFish() {
  return request.get(rootUrl + '/fish').then((res) => {
    return res.body
  })
}

export function addNewFish(newFish) {
  return request
    .post(rootUrl + '/fish')
    .send({ newFish })
    .then((res) => {
      return res.body
    })
}

export function getWeather() {
  return request.get(rootUrl + '/weather').then((res) => {
    return res.body
  })
}
