import nock from 'nock'
import { getFish, getWeather } from './apiClient'

describe('getFish', () => {
  it('get fish from fish api', () => {
    const scope = nock('http://localhost:3000').get('/api/v1/fish').reply(200, {
      fish: 'I am a fish',
    })
    return getFish().then((result) => {
      console.log(result)
      expect(result.fish).toContain('a fish')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getWeather', () => {
  it('get rover name', () => {
    const scope = nock('http://localhost:3000')
      .get('/api/v1/weather')
      .reply(200, { message: 'I am rovaaaa' })
    return getWeather().then((res) => {
      expect(res.message).toContain('rovaaa')
      expect(scope.isDone()).toBe(true)
    })
  })
})
