import request from 'supertest'
import app from '../src/app'

describe('app', () => {
  it('should return 204 for favicon.ico', async () => {
    const response = await request(app).get('/favicon.ico')
    expect(response.status).toBe(204)
  })

  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown-route')
    expect(response.status).toBe(404)
    expect(response.text).toBe('Not Found')
  })

  it('should return 500 for internal server error', async () => {
    const response = await request(app).get('/error')
    expect(response.status).toBe(500)
    expect(response.text).toBe('Internal Server Error')
  })

  it('should return 200 for known routes', async () => {
    // Assuming that '/known-route' is a route that exists in your app
    const response = await request(app).get('/ping')
    expect(response.status).toBe(200)
  })
})
