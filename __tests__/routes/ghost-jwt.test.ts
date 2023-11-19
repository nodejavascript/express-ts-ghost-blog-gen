import request from 'supertest'
import app from '../../src/app'

describe('jwtToken', () => {
  it('should return 400 if Authorization header is not found', async () => {
    const response = await request(app).get('/ghost-jwt')
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: 'Header not found' })
  })

  it('should return 400 if Authorization header is not in the correct format', async () => {
    const response = await request(app).get('/ghost-jwt').set('Authorization', 'InvalidHeader')
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: 'Invalid Authorization header' })
  })

  it('should return 400 if Bearer token is not valid', async () => {
    const response = await request(app).get('/ghost-jwt').set('Authorization', 'Bearer InvalidAPIKey')
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: 'Invalid Bearer token' })
  })

  it('should return 200 and correct headers if API key is valid', async () => {
    const keyid = 'test-keyid'
    const secret = 'test-secret'
    const apiKey = `${keyid}:${secret}`

    const response = await request(app).get('/ghost-jwt').set('Authorization', `Bearer ${apiKey}`)

    expect(response.status).toBe(200)
  })
})
