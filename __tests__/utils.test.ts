import { getHeaderValue } from '../src/utils'
import { Request } from 'express'

describe('getHeaderValue', () => {
  let mockRequest: Partial<Request>

  beforeEach(() => {
    mockRequest = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token'
      }
    }
  })

  it('should return the header value if it exists', () => {
    const result = getHeaderValue(mockRequest as Request, 'Content-Type')
    expect(result).toBe('application/json')
  })

  it('should return undefined if the header does not exist', () => {
    const result = getHeaderValue(mockRequest as Request, 'Non-Existent-Header')
    expect(result).toBeUndefined()
  })
})
