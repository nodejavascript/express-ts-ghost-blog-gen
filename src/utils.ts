import { Request } from 'express'

export const getHeaderValue = (req: Request, key: string): string | undefined => {
  const headers = req.headers as { [key: string]: string }
  return headers[key]
}
