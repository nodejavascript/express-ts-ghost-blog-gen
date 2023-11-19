import request from 'supertest'
import app from '../../src/app'

describe('GET /ping', () => {
  it('should return a 200 status code and a JSON object with the current time and version', async () => {
    const response = await request(app).get('/ping')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('now')
    expect(response.body).toHaveProperty('version')

    // Check if 'now' is a valid ISO string date
    expect(new Date(response.body.now).toISOString()).toBe(response.body.now)

    // Check if 'version' is a semantic version number
    const semanticVersionRegex =
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/
    expect(semanticVersionRegex.test(response.body.version)).toBe(true)
  })
})
