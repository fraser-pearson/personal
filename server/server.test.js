const request = require('supertest')
const nock = require('nock')

const server = require('./server')

describe('GET /api/v1/weather', () => {
  it('get information from api.open-meteo.com', () => {
    const scope = nock('https://api.open-meteo.com/')
      .get(
        `/v1/forecast?latitude=-41.2865&longitude=174.7762&daily=precipitation_sum,rain_sum,weathercode&timezone=NZ`
      )
      .reply(200, {
        weather: 'weather is great today',
      })

    return request(server)
      .get('/api/v1/weather')
      .then((res) => {
        console.log(res.body)
        expect(res.body.weather).toContain('great today')
        expect(scope.isDone()).toBe(true)
      })
  })
})
