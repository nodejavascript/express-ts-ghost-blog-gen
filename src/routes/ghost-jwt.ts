import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { getHeaderValue } from '../utils'

const jwtToken = async (req: Request, res: Response) => {
  const headerValue = getHeaderValue(req, 'authorization')

  if (!headerValue) {
    return res.status(400).json({ error: 'Header not found' })
  }

  const [bearer, apiKey] = headerValue.split(' ')

  if (bearer !== 'Bearer' || !apiKey) {
    return res.status(400).json({ error: 'Invalid Authorization header' })
  }

  const [keyid, secret] = apiKey.split(':')

  if (!keyid || !secret) {
    return res.status(400).json({ error: 'Invalid Bearer token' })
  }

  const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid,
    algorithm: 'HS256',
    expiresIn: '5m',
    audience: '/admin/'
  })

  return res.status(200).json({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Ghost ${token}`
    }
  })
}

export default jwtToken
